export type TableProps = {
    loading: false,
    data: DonationEntry[]
} | {
    loading: false,
    error: string
}

export type TableState = {
    loading: true,
  } | {
    loading: false,
    data: DonationEntry[]
  } | {
    loading: false,
    error: string
  }

export type Action =
| { type: 'success', dataset: DonationEntry[] }
| { type: 'failure', errorMsg: string }