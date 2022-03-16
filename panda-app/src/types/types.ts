export type TableProps = {
    loading: false,
    data: DonationEntry[]
} | {
    loading: false,
    error: string
}