const {EventBus} = require('../script/1')

describe('class: EventBus', () => {
  let eventBusTest

  beforeEach(() => {
    eventBusTest = new EventBus()
  })

  test(`When called,
      Then should init`, () => {
    expect(eventBusTest).not.toBeNull()
  })

  describe('EventBus: on()', () => {
    test(`Given listeners array is empty,
        When called method on(),
        Then should add event listener to listeners array`, () => {
      const mockEvent = 'mockEvent'
      const mockCallback = jest.fn()

      eventBusTest.on(mockEvent, mockCallback)

      expect(eventBusTest.listeners[mockEvent]).toEqual([mockCallback])
    })

    test(`Given listeners array is not empty,
        When called method on(),
        Then should add event listener to listeners array`, () => {
      const mockEvent = 'mockEvent'
      const mockCallbackFoo = jest.fn()
      const mockCallbackBar = jest.fn()

      eventBusTest.on(mockEvent, mockCallbackFoo)
      eventBusTest.on(mockEvent, mockCallbackBar)

      expect(eventBusTest.listeners[mockEvent]).toContain(mockCallbackBar)
      expect(eventBusTest.listeners[mockEvent]).toContain(mockCallbackFoo)
    })

    test(`When called method on(),
        Then should call Array.push method`, () => {
      const mockEvent = 'mockEvent'
      const arrayPushOriginal = Array.prototype.push
      Array.prototype.push = jest.fn()

      eventBusTest.on(mockEvent, jest.fn())

      expect(Array.prototype.push).toHaveBeenCalledTimes(1)

      Array.prototype.push = arrayPushOriginal
    })

  })

  describe('EventBus: emit()', () => {
    test(`When called method emit(),
        Then should have been called saved callback`, () => {
      const mockEvent = 'mockEvent'
      const mockCallback = jest.fn()

      eventBusTest.on(mockEvent, mockCallback)
      eventBusTest.emit(mockEvent)

      expect(mockCallback).toHaveBeenCalledTimes(1)
    })

    test(`Given not existing event,
        When called method emit(),
        Then should not have been called saved callback`, () => {
      const mockEvent = 'mockEvent'
      const mockCallback = jest.fn()

      eventBusTest.emit(mockEvent)

      expect(mockCallback).toHaveBeenCalledTimes(0)
    })
  })
})
