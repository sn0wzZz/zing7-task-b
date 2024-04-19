export const formatCurrency = (value) =>
  new Intl.NumberFormat('bg-BG', { style: 'currency', currency: 'BGN' }).format(
    value
  )

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatDateRange(startDate, endDate) {
  const startDay = startDate.getDate()
  const startMonth = capitalizeFirstLetter(
    startDate.toLocaleDateString('bg-BG', {
      month: 'long',
    })
  )
  const endDay = endDate.getDate()
  const endMonth = capitalizeFirstLetter(
    endDate.toLocaleDateString('bg-BG', {
      month: 'long',
    })
  )

  const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))

  let dateRange
  if (startMonth === endMonth) {
    dateRange = `${startDay}-${endDay} ${startMonth}`
  } else {
    dateRange = `${startDay} ${startMonth} - ${endDay} ${endMonth}`
  }

  return { dateRange, nights }
}
