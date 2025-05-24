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
    closeForm: () => void
}
export default function ActivityDashboard({
    activities, selectActivity,
    selectedActivity, cancelSelectActivity,
    openForm, editMode, closeForm
}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode && <ActivityDetail sactivity={selectedActivity} openForm={openForm} cancelSelectActivity={cancelSelectActivity} />}
                {editMode && <ActvityForm closeForm={closeForm} activity={selectedActivity} />}
            </Grid>
        </Grid>
    )
}