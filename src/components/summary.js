import { useEffect, useState } from "react";
import confirmBG from "../images/icon-thank-you.svg";

const Summary = (props) => {
  const [confirm, setConfirm] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setConfirm(props.confirm);

    let totalTemp = props.profile.plan.price;
    props.profile.addons.map((item) => (totalTemp += item.price));
    setTotal(totalTemp);
  }, [props.confirm]);

  if (!confirm) {
    return (
      <div id='summary-container'>
        <p id='summary-title'>Finishing up</p>
        <p id='summary-subtitle'>
          Double-check everything looks OK before confirming.
        </p>
        <div id='billed-items-container'>
          <div id='summary-billing'>
            <p>
              {props.profile.plan.name} ({props.profile.billing})
            </p>
            <span id='change-plan'>Change</span>
            {props.profile.billing === "monthly" && (
              <p>${props.profile.plan.price}/mo</p>
            )}
            {props.profile.billing === "yearly" && (
              <p>${props.profile.plan.price}/yr</p>
            )}
          </div>
          <div id='summary-addon-container'>
            {props.profile.addons.map((item, key) => (
              <div className='summary-addon' key={key}>
                <p>{item.name}</p>
                {props.profile.billing === "monthly" && (
                  <p>+${item.price}/mo</p>
                )}
                {props.profile.billing === "yearly" && <p>+${item.price}/yr</p>}
              </div>
            ))}
          </div>
        </div>
        <div id='total-container'>
          <p>Total (per month)</p>
          {props.profile.billing === "monthly" && <p>+${total}/mo</p>}
          {props.profile.billing === "yearly" && <p>+${total}/yr</p>}
        </div>
      </div>
    );
  } else {
    return (
      <div id='confirmed-container'>
        <span>
          <img alt='tick' src={confirmBG} />
        </span>
        <p>Thank you!</p>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    );
  }
};

export default Summary;
