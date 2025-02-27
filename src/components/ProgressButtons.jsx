/* eslint-disable react/prop-types */
import { Stepper, Step } from "@material-tailwind/react";

const ProgressButtons = ({activeStep, steps})=> {
  
    return (
    <div className="w-[400px] items-center mx-auto">
        <Stepper 
        activeStep={activeStep}>
          {steps.map((step, i) => {
            return (
              <Step key={i} className="w-4 h-4" activeClassName="bg-[#122653]" completedClassName="bg-[#122653]"/>
            )
          })}
      </Stepper>
    </div>
    );
};

export default ProgressButtons;