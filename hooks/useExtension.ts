import { init, SDK } from 'dc-extensions-sdk'
import { useState, useEffect } from 'react'

interface FieldModel {}

interface Parameters {
  instance: {}
  installation: {}
}

export function useExtension() {
  const [sdk, setSDK] = useState<SDK>()
  const [ready, setFetched] = useState<boolean>(false)
  const [initialData, setData] = useState<any>(false)

  async function initialize() {
    try {
      const sdk = await init<FieldModel, Parameters>({ debug: true })

      setSDK(sdk)
    } catch (e) {
      console.log('Not connected to DC')
    }
  }

  useEffect(() => {
    if (!sdk) return

    async function fetchInitialData() {
      try {
        const data = await sdk?.field.getValue()

        setData(data)
      } catch (e) {
      } finally {
        setFetched(true)
      }
    }

    fetchInitialData()
  }, [sdk])

  useEffect(() => {
    initialize()
  }, [])

  return {
    sdk,
    ready,
    initialData,
  }
}
