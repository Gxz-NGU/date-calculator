document.addEventListener('DOMContentLoaded', () => {
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');
    const daysToAddInput = document.getElementById('days-to-add');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDateEl = document.getElementById('result-date');

    // 1. Set default date to today
    const today = new Date();
    yearInput.value = today.getFullYear();
    monthInput.value = today.getMonth() + 1; // getMonth() is 0-based
    dayInput.value = today.getDate();

    // 2. Add event listener to the button
    calculateBtn.addEventListener('click', () => {
        // 3. Get user input
        const year = parseInt(yearInput.value);
        const month = parseInt(monthInput.value) - 1; // Convert to 0-based for Date object
        const day = parseInt(dayInput.value);
        const daysToAdd = parseInt(daysToAddInput.value);

        // Basic validation
        if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(daysToAdd)) {
            resultDateEl.textContent = '请输入有效的数字';
            resultDateEl.style.color = 'red';
            return;
        }

        try {
            // 4. Perform the calculation
            const startDate = new Date(year, month, day);
            // Check if the initial date is valid (e.g., not Feb 30)
            if (startDate.getFullYear() !== year || startDate.getMonth() !== month || startDate.getDate() !== day) {
                 throw new Error('无效的起始日期');
            }

            const resultDate = new Date(startDate);
            resultDate.setDate(startDate.getDate() + daysToAdd);

            // 5. Format and display the result
            const resultYear = resultDate.getFullYear();
            const resultMonth = resultDate.getMonth() + 1;
            const resultDay = resultDate.getDate();

            resultDateEl.textContent = `${resultYear}年 ${resultMonth}月 ${resultDay}日`;
            resultDateEl.style.color = '#007bff'; // Reset color on success

        } catch (error) {
            resultDateEl.textContent = error.message;
            resultDateEl.style.color = 'red';
        }
    });
});
