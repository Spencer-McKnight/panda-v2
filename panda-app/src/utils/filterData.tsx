export const filterData: (arg0: DonationEntry[]) => DonationEntry[] = (array: DonationEntry[]) => {
    const isDisplayed: (arg0: DonationEntry) => boolean = (value: DonationEntry) => {
        return value.isPublic === true;
    }

    const publicArray: DonationEntry[] = array.filter(isDisplayed)

    return publicArray;
}