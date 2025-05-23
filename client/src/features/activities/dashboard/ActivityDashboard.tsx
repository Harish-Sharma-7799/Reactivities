import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActvityForm from "../form/ActvityForm";

type Props = {
    activities: Activity[],
    selectActivity: (id: string) => void,
    cancelSelectActivity: () => void,
    selectedActivity?: Activity,
    openForm: (id: string) => void,
    editMode: boolean,
    closeForm: () => void,
    submitForm: (activity: Activity) => void,
    deleteActivity: (id: string) => void
}
export default function ActivityDashboard({
    activities, selectActivity,
    selectedActivity, cancelSelectActivity,
    openForm, editMode, closeForm, submitForm,
    deleteActivity
}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={activities} deleteActivity={deleteActivity} selectActivity={selectActivity} />
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode && <ActivityDetail activity={selectedActivity} openForm={openForm} cancelSelectActivity={cancelSelectActivity} />}
                {editMode && <ActvityForm closeForm={closeForm} submitForm={submitForm} activity={selectedActivity} />}
            </Grid>
        </Grid>
    )
}