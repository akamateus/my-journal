import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm() {
  return (
    <form className="entry-form">
      <h2 className="entry-form__title"> YOUR NEW ENTRY</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Tittle</label>
          <input type="text" name="motto" id="motto" maxLength={50} required />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows="4"
            placeholder="Limited to 150 characters 😭"
            maxLength={150}
            required
          />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
