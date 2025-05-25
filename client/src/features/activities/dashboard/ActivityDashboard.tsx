import { Grid, Typography } from "@mui/material";
import ActivityList from "./ActivityList";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDashboard() {
    const { activities, isPending } = useActivities();
    if (!activities || isPending) { return <Typography>Loading....</Typography> }
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList />
            </Grid>
            <Grid size={5}>
                Actvity Filters go here
            </Grid>
        </Grid>
    )
}