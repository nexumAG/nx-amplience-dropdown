import React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core'

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
    setTimeout(() => {
      sdk.frame.setHeight()
    }, 0)
  }, [sdk])

  const handleChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    sdk.field.setValue(ev.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label-id">{sdk.field.schema?.title}</InputLabel>
      <Select
        labelId="select-label-id"
        defaultValue={initialData || defaultValue}
        disabled={sdk.form.readOnly}
        onChange={handleChange}
        onOpen={() => {
          sdk.frame.setHeight(options.length * 100)
        }}
        onClose={() => {
          sdk.frame.setHeight()
        }}
      >
        {options.map(({ id, label }) => (
          <MenuItem key={id} value={id}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{sdk.field.schema?.description}</FormHelperText>
    </FormControl>
  )
}
