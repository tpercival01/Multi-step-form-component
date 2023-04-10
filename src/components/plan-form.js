import { useEffect, useState } from "react";
import PlanComponent from "./plan-component";
import iconOne from "../images/icon-arcade.svg";
import iconTwo from "../images/icon-advanced.svg";
import iconThree from "../images/icon-pro.svg";

const Plan = (props) => {
  const [method, setMethod] = useState("");
  const [active, setActive] = useState(["", "off"]);
  const [planActiveState, setPlanActiveState] = useState([
    "plan-active",
    "",
    "",
  ]);

  const handlePlanActive = (e) => {
    let temp = {};
    switch (e.target.id) {
      case "Arcade":
        temp =
          method === "monthly"
            ? { name: e.target.id, price: 9 }
            : { name: e.target.id, price: 90 };
        props.profile.plan = temp;
        setPlanActiveState(["plan-active", "", ""]);
        break;
      case "Advanced":
        temp =
          method === "monthly"
            ? { name: e.target.id, price: 12 }
            : { name: e.target.id, price: 120 };
        props.profile.plan = temp;
        setPlanActiveState(["", "plan-active", ""]);
        break;
      case "Pro":
        temp =
          method === "monthly"
            ? { name: e.target.id, price: 15 }
            : { name: e.target.id, price: 150 };
        props.profile.plan = temp;
        setPlanActiveState(["", "", "plan-active"]);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setMethod(props.billing);
    setActive(props.active);

    switch (props.profile.plan) {
      case "Arcade":
        setPlanActiveState(["plan-active", "", ""]);
        break;
      case "Advanced":
        setPlanActiveState(["", "plan-active", ""]);
        break;
      case "Pro":
        setPlanActiveState(["", "", "plan-active"]);
        break;

      default:
        break;
    }
  }, [props.active, active, method, props.billing]);

  return (
    <div id='plan-container'>
      <p id='plan-title'>Select your plan</p>
      <p id='plan-subtitle'>
        You have the option of monthly or yearly billing.
      </p>
      {method === "monthly" && (
        <div id='monthly-container'>
          <PlanComponent
            type='monthly'
            title='Arcade'
            price='$9/mo'
            img={iconOne}
            onclick={handlePlanActive}
            class={planActiveState[0]}
          />
          <PlanComponent
            type='monthly'
            title='Advanced'
            price='$12/mo'
            img={iconTwo}
            onclick={handlePlanActive}
            class={planActiveState[1]}
          />
          <PlanComponent
            type='monthly'
            title='Pro'
            price='$15/mo'
            img={iconThree}
            onclick={handlePlanActive}
            class={planActiveState[2]}
          />
        </div>
      )}
      {method === "yearly" && (
        <div id='yearly-container'>
          <PlanComponent
            type='yearly'
            title='Arcade'
            price='$90/yr'
            text='2 months free'
            img={iconOne}
            onclick={handlePlanActive}
            class={planActiveState[0]}
          />
          <PlanComponent
            type='yearly'
            title='Advanced'
            price='$120/yr'
            text='2 months free'
            img={iconTwo}
            onclick={handlePlanActive}
            class={planActiveState[1]}
          />
          <PlanComponent
            type='yearly'
            title='Pro'
            price='$150/yr'
            text='2 months free'
            img={iconThree}
            onclick={handlePlanActive}
            class={planActiveState[2]}
          />
        </div>
      )}
      <div id='billing-choice'>
        <p id='monthly' className={active[0]}>
          Monthly
        </p>
        <input
          type='checkbox'
          id='billing-switch'
          onClick={props.handleSwitch}
        />
        <label htmlFor='billing-switch' id='billing-switch-label'>
          Toggle
        </label>
        <p id='yearly' className={active[1]}>
          Yearly
        </p>
      </div>
    </div>
  );
};

export default Plan;
