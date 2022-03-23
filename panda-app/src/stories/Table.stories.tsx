import { storiesOf } from "@storybook/react";
import Table from "../components/table";
import { object, text } from "@storybook/addon-knobs";

const dataSet: DonationEntry[] = [
  {
    amount: "255",
    date: "2022-02-28T16:51:31.953Z",
    donor: 12345,
    isPublic: true,
  },
  {
    amount: "230",
    date: "2022-01-28T16:51:31.953Z",
    donor: 12346,
    isPublic: true,
  },
  {
    amount: "190",
    date: "2022-03-28T16:51:31.953Z",
    donor: 12347,
    isPublic: true,
  },
];

storiesOf("Table", module).add("Filled Table", () => <Table loading={false} data={object("Input Data", dataSet)} />);

storiesOf("Table", module).add("Error Display", () => (
  <Table loading={false} error={text("Error Message", "A test error has occurred.")} />
));
