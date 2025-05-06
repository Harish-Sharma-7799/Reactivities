import { ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const title = "Welcome to Reactivities";
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/Activities')
      .then(response => setActivities(response.data))
    return () => { }
  }, [])
  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    </>

  )
}
export default App
