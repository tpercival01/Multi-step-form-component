import { useState } from "react";

const Addons = (props) => {
  const [state, setState] = useState(props.billing);

  const handleAddon = (e) => {
    let addon = document.getElementById(e.target.id);
    if (addon.classList.contains("addon-active")) {
      addon.classList.remove("addon-active");
      props.profile["addons"].splice(
        props.profile["addons"].indexOf(e.target.id),
        1
      );
    } else {
      addon.classList.add("addon-active");
      let temp = {};

      switch (e.target.value) {
        case "Online service":
          temp =
            props.profile.plan.name === "monthly"
              ? { name: e.target.value, price: 1 }
              : { name: e.target.value, price: 10 };
          props.profile.addons.push(temp);
          console.log(props.profile);
          break;

        case "Larger storage":
          temp =
            props.profile.plan.name === "monthly"
              ? { name: e.target.value, price: 2 }
              : { name: e.target.value, price: 20 };
          props.profile.addons.push(temp);
          console.log(props.profile);
          break;

        case "Customizable profile":
          temp =
            props.profile.plan.name === "monthly"
              ? { name: e.target.value, price: 2 }
              : { name: e.target.value, price: 20 };
          props.profile.addons.push(temp);
          console.log(props.profile);
          break;

        default:
          break;
      }
    }
  };

  return (
    <div id='addon-container'>
      <p id='addon-title'>Pick add-ons</p>
      <p id='addon-subtitle'>Add-ons help enhance your gaming experience.</p>
      {state === "monthly" && (
        <div>
          <div id='online' className='addon-component'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                id='online'
                className='addons-checkbox'
                onClick={handleAddon}
                value='Online service'
              />
              <span className='checkmark'></span>
            </label>
            <div>
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
          </div>
          <div id='storage' className='addon-component'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                id='storage'
                className='addons-checkbox'
                onClick={handleAddon}
                value='Larger storage'
              />
              <span className='checkmark'></span>
            </label>
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$2/mo</p>
          </div>
          <div id='custom-profile' className='addon-component'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                id='custom-profile'
                className='addons-checkbox'
                onClick={handleAddon}
                value='Customizable profile'
              />
              <span className='checkmark'></span>
            </label>
            <div>
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
          </div>
        </div>
      )}
      {state === "yearly" && (
        <div>
          <div id='online' className='addon-component'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                id='online'
                className='addons-checkbox'
                onClick={handleAddon}
                value='Online service'
              />
              <span className='checkmark'></span>
            </label>
            <div>
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
            <p>+$10/yr</p>
          </div>
          <div id='storage' className='addon-component'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                id='storage'
                className='addons-checkbox'
                onClick={handleAddon}
                value='Larger storage'
              />
              <span className='checkmark'></span>
            </label>
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p>+$20/yr</p>
          </div>
          <div id='custom-profile' className='addon-component'>
            <label className='checkbox-container'>
              <input
                type='checkbox'
                id='custom-profile'
                className='addons-checkbox'
                onClick={handleAddon}
                value='Customizable profile'
              />
              <span className='checkmark'></span>
            </label>
            <div>
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
            <p>+$20/yr</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addons;
