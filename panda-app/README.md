## Inlight Panda Rescue™

### Introduction

Inlight Panda Rescue™ recently launched their latest campaign and have taken a respectable number of donations but would
like to increase their conversions further. They'd like to experiment with displaying previous donations on the website
to see whether this encourages others to donate as well.

Donations are currently collected through a third party system which provides data exports via a simple API. There are
two endpoints for this data:

- https://inlight-panda-rescue-api.herokuapp.com/donors?apiKey=cr2eJJDmDK94NgbaPL8Z
- https://inlight-panda-rescue-api.herokuapp.com/donations?apiKey=cr2eJJDmDK94NgbaPL8Z

Your job will be to expose this data on the website to encourage other users to donate.

### Requirements

Inlight Panda Rescue™ would like to display a running total of donations next to the donate button and have this update
every few seconds. They'd also like a link through to a new page which lists out all previous donations.

Since there have been a large number of donations already, they'd like the donations on this page to be paginated and
would also like them to be filterable by state.

Our designers have put together a mockup of how they'd like this to look:

![Image](mockup.jpg?raw=true)

### Considerations

- Some donors have opted for their donation to not be made public, these donations shouldn't be listed on the site, but
  they should contribute to the donations total.
- Calls to the API are quite computationally expensive (the donation system is old) so we've been asked to keep requests
  to a minimum.

### Budget

Since this is a not-for-profit client, the budget is pretty tight. You've got 3 hours to put together the best solution
possible.

### Getting Started

The project is built using React so you'll need to ensure you have NodeJS and Yarn installed. With both of those
installed you can simply run these commands to get started:

```
$ yarn
$ yarn start
```

Please create a new branch to manage your changes and ensure your changes are pushed to GitHub by the end of the task.
