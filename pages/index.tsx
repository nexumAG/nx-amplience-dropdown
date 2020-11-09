import { useExtension } from '../hooks/useExtension'
import { Dropdown } from '../components/Dropdown'

export default function Extension() {
  const { sdk, initialData, ready, required } = useExtension()

  if (!sdk || !ready) {
    return <pre>Loading...</pre>
  }

  sdk.frame.startAutoResizer()

  return <Dropdown sdk={sdk} initialData={initialData} required={required} />
}
