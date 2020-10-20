const dqs = q => document.querySelector(q)

function fundraising_thermometer(
  container_id, {total_fundraised, fundraising_goal: goal}, {locale, style, currency}
) {
  const { format } = new Intl.NumberFormat(locale, {style, currency})
  const amount = Math.floor(total_fundraised)

  const ui = {
    amount: dqs(`#${container_id} span.amount`),
    goal: dqs(`#${container_id} span.goal`)
  }
  ui.amount.innerHTML = format(amount)
  ui.goal.innerHTML = format(goal)

  const percentage = Math.ceil((amount / goal) * 100);
  dqs(`#${container_id} .progress`).style.width = `${percentage}%`;

  dqs(`#${container_id} .fundraising_thermometer`).style.visibility = 'visible';
}
