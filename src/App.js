import "./styles.css";
import { useEffect, useState } from "react";
import Step from "./components/step";
import sideBG from "./images/bg-sidebar-desktop.svg";

import PersonalForm from "./components/personal-form";
import PlanForm from "./components/plan-form";
import AddonsForm from "./components/addons-form";
import Summary from "./components/summary";

export default function App() {
  const [step, setStep] = useState(1);
  const [billing, setBilling] = useState("monthly");
  const [active, setActive] = useState(["", "off"]);
  const [confirm, setConfirm] = useState(false);
  const [profileObject, setProfileObject] = useState({
    name: "",
    email: "",
    phone: "",
    plan: { name: "Arcade", price: 9 },
    billing: "monthly",
    addons: [],
  });

  function handleStep(e) {
    // error handling for empty inputs
    // checking if inputs are empty then creating a temp array to map over
    // and display appropriate message
    if (
      profileObject.name === "" ||
      profileObject.email === "" ||
      profileObject.phone === ""
    ) {
      let tempArr = [
        profileObject.name,
        profileObject.email,
        profileObject.phone,
      ];
      tempArr.map((item, key) => {
        if (item === "") {
          document.querySelectorAll(".error")[key].style.display = "block";
        }
      });
      // checking which step is displayed to ensure it doesn't go above 4 or below 1
    } else {
      if (e.target.id === "next-step" && step < 4) {
        setStep((prevState) => prevState + 1);
        document.getElementById(`${step}`).classList.remove("step-active");
      } else if (e.target.id === "back-step" && step > 1) {
        setStep((prevState) => prevState - 1);
        document.getElementById(`${step}`).classList.remove("step-active");
      }
      if (e.target.id === "confirm-step") {
        setConfirm((prevState) => !prevState);
        document.getElementById("nav-buttons").style.display = "none";
      }
    }
  }

  function handlePlanSwitch() {
    if (billing === "monthly") {
      setBilling("yearly");
      setActive(["off", ""]);

      // copy profile object to update billing
      let temp = profileObject;
      temp["billing"] = "yearly";
      setProfileObject(temp);

      document.getElementById("monthly").classList.add("off");
      document.getElementById("yearly").classList.remove("off");
    } else {
      setBilling("monthly");
      setActive(["", "off"]);

      let temp = profileObject;
      temp["billing"] = "monthly";
      setProfileObject(temp);

      document.getElementById("yearly").classList.add("off");
      document.getElementById("monthly").classList.remove("off");
    }
  }

  useEffect(() => {
    document.getElementById(`${step}`).classList.add("step-active");
  }, [step]);

  return (
    <div className='App'>
      <div id='main-container'>
        <div id='side-background' style={{ backgroundImage: `url(${sideBG})` }}>
          <div id='steps-container'>
            <Step
              id='1'
              class='step-active'
              values={{ step: "STEP 1", text: "YOUR INFO", num: 1 }}
            />
            <Step
              id='2'
              class=''
              values={{ step: "STEP 2", text: "SELECT PLAN", num: 2 }}
            />
            <Step
              id='3'
              class=''
              values={{ step: "STEP 3", text: "ADD-ONS", num: 3 }}
            />
            <Step
              id='4'
              class=''
              values={{ step: "STEP 4", text: "SUMMARY", num: 4 }}
            />
          </div>
        </div>
        {step === 1 && <PersonalForm profile={profileObject} />}
        {step === 2 && (
          <PlanForm
            active={active}
            billing={billing}
            profile={profileObject}
            handleSwitch={handlePlanSwitch}
          />
        )}
        {step === 3 && (
          <AddonsForm
            profile={profileObject}
            active={active}
            billing={billing}
          />
        )}
        {step === 4 && (
          <Summary
            profile={profileObject}
            active={active}
            billing={billing}
            confirm={confirm}
          />
        )}
        <div id='nav-buttons'>
          {step > 1 && (
            <div id='back-step' onClick={handleStep}>
              Go Back
            </div>
          )}
          {step < 4 && (
            <div id='next-step' onClick={handleStep}>
              Next Step
            </div>
          )}
          {step === 4 && (
            <div id='confirm-step' onClick={handleStep}>
              Confirm
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
