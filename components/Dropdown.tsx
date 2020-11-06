import React from 'react'
import { NativeSelect } from '@material-ui/core'

type DropdownOption = {
  id: string
  label: string
}

type DropdownParams = {
  defaultValue: string
  options: [DropdownOption]
}

export function Dropdown({ sdk, initialData }: { sdk: any; initialData: any }) {
  const { defaultValue, options } = sdk.params.instance as DropdownParams

  React.useEffect(() => {
    sdk.field.setValue(defaultValue)
  }, [sdk])

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    sdk.field.setValue(ev.target.value)
  }

  return (
    <NativeSelect
      defaultValue={initialData || defaultValue}
      onChange={handleChange}
      disabled={sdk.form.readOnly}
    >
      {options.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </NativeSelect>
  )
}
