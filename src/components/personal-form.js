const PersonalForm = (props) => {
  function handleForm(e) {
    switch (e.target.id) {
      case "name-input":
        props.profile.name = e.target.value;
        break;

      case "email-input":
        props.profile.email = e.target.value;
        break;

      case "number-input":
        props.profile.phone = e.target.value;
        break;

      default:
        console.log("error");
    }
    console.log(props.profile);
  }
  return (
    <div id='personal-form'>
      <p id='personal-title'>Personal info</p>
      <p id='personal-subtitle'>
        Please provide your name, email address, and phone number.
      </p>
      <div className='error-container'>
        <label className='input-container' id='name-label' htmlFor='name-input'>
          Name
          <input
            id='name-input'
            className='personal-input'
            type='text'
            placeholder='e.g. Stephen King'
            onChange={handleForm}
          />
        </label>
        <p id='name-error' className='error'>
          This field is required
        </p>
      </div>
      <div className='error-container'>
        <label
          className='input-container'
          id='email-label'
          htmlFor='email-input'
        >
          Email Address
          <input
            className='personal-input'
            id='email-input'
            type='email'
            placeholder='e.g. stephenking@lorem.com'
            onChange={handleForm}
          />
        </label>
        <p id='email-error' className='error'>
          This field is required
        </p>
      </div>
      <div className='error-container'>
        <label
          className='input-container'
          id='number-label'
          htmlFor='number-input'
        >
          Phone Number
          <input
            className='personal-input'
            id='number-input'
            type='number'
            placeholder='e.g. +1 234 567 890'
            onChange={handleForm}
          />
        </label>
        <p id='number-error' className='error'>
          This field is required
        </p>
      </div>
    </div>
  );
};

export default PersonalForm;
