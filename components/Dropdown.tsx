import React from 'react'
import {
  Select,
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

export function Dropdown({
  sdk,
  initialData,
  required,
}: {
  sdk: any
  initialData: any
  required: boolean
}) {
  const { defaultValue, options } = sdk.params.instance as DropdownParams

  React.useEffect(() => {
    sdk.field.setValue(defaultValue)
  }, [sdk])

  const handleChange = (
    ev: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    sdk.field.setValue(ev.target.value)
  }
  console.log(sdk.field.schema)
  return (
    <FormControl fullWidth required={required}>
      <InputLabel id="select-label-id">{sdk.field.schema?.title}</InputLabel>
      <Select
        autoWidth
        labelId="select-label-id"
        defaultValue={initialData || defaultValue}
        disabled={sdk.form.readOnly}
        native
        onChange={handleChange}
      >
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </Select>
      <FormHelperText>{sdk.field.schema?.description}</FormHelperText>
    </FormControl>
  )
}
