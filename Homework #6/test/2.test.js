const {moveCircle} = require('../script/2')

describe('Circles Test', () => {
  describe('moveCircle test', () => {
    test('Should add circle to DOM and after delay change it\'s position through style', async () => {
      /**
       * Define
       */
      const color = 'circle-red'
      const newPosition = {
        top: '10px',
        right: '10px',
        bottom: '10px',
        left: '10px'
      }

      const classListAdd = jest.fn()
      const circle = {
        style: {},
        classList: {
          add: classListAdd
        }
      }
      //
      // const createElementSpy = jest.fn(() => circle);
      // Object.defineProperty(global.document, 'createElement', { value: createElementSpy });

      const rootAppendSpy = jest.fn()
      const root = {
        append: rootAppendSpy
      }

      /**
       * Do
       */
      await moveCircle(root, color, newPosition)


      /**
       * Expect
       */
      // expect(createElementSpy).toHaveBeenCalledTimes(1)
      // expect(createElementSpy).toHaveBeenCalledWith('div')

      expect(classListAdd).toHaveBeenCalledTimes(1)
      expect(classListAdd).toHaveBeenCalledWith('circle', color)

      expect(rootAppendSpy).toHaveBeenCalledTimes(1)
      expect(rootAppendSpy).toHaveBeenCalledWith(circle)

      expect(circle.style).toEqual(newPosition)

    })
  })
})
