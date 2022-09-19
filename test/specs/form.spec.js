describe('Fill the menu panel', () => {
    it('Must access the form and fill in the data', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Digitei isso aqui')
        await $('~switch').click()
        await $('~Dropdown').click()
        await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText').click()
        await $('//android.widget.checkedtextview[@index="3"]').click()
        await $('//android.widget.TextView[@index="0"]').click()
    });
})