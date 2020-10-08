import React from "react";
import LeftSidebar from "./common/LeftSidebar";
import MyAccountContent from "../../partials/dashboard/MyAccountContent";

const MyAccountView = ({ user, userLoading }) => {
    return (
        <div className="dashboardSection">
            <LeftSidebar />

            <MyAccountContent
                user={user}
				userLoading={userLoading}
            />
        </div>
    )
}

export default MyAccountView
