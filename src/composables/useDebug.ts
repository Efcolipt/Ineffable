/* eslint-disable no-console */
export const useDebug = () => {
  const debug = (...args: any) => {
    const cfg = useRuntimeConfig().public

    if (cfg.app.DEBUG) {
      const debugCfg = {
        message: {
          default(str = ''): string {
            return `[DEBUG LOG]${str}`
          },

          infoOfElement(str = '', newLine = false): string {
            const def = this.default(`[ELEMENT][${str.toUpperCase()}]`)
            return `${newLine ? '\n' : ''} ${def}`
          },

          typeOfElement(newline = true): string {
            return this.infoOfElement('type', newline)
          },

          valueOfElement(newline = false): string {
            return this.infoOfElement('value', newline)
          },
        },
      }
      console.group('[DEBUG]')

      args.forEach((element: any) => {
        console.debug(
          debugCfg.message.valueOfElement(),
          element,
          debugCfg.message.typeOfElement(),
          typeof element
        )
      })
      console.groupEnd()
    }
  }

  return {
    debug,
  }
}
