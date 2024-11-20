import React from "react";

const UpdatedComp = (OriginalComp) => {
    class NewComp extends React.Component {
        // constructor(props) {
        //     super(props);
        // }
        render() {
            return <OriginalComp name="Rahul" />;
        }
    }
    return NewComp;
};
export default UpdatedComp