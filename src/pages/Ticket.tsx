function Ticket() {
  const Localkey = process.env.REACT_APP_LocalStorageKey;
  const LocalStorageObj = JSON.parse(`${localStorage.getItem(`${Localkey}`)}`);
  console.log(LocalStorageObj);
  return <div>ticket</div>;
}
export default Ticket;
