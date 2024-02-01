
export const handleFormService = (e, formData, setFormData) => {
  const {name, value} = e.target
  setFormData({
    ...formData,
    ...{[name]: value}
  })
}