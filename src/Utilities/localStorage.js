

const getFromLocalStorage = () =>{
  const installedApps = localStorage.getItem('installedApps');
  if(installedApps){
    return JSON.parse(installedApps)
  }
  else{
    return [];
  }
}

const setToLocalStorage = (id) =>{
  const installedApps = getFromLocalStorage();
  if(installedApps.includes(id)){
    return;
  }
  installedApps.push(id);
  localStorage.setItem('installedApps', JSON.stringify(installedApps));
}

const removeFromLocalStorage = id =>{
  const installedApps = getFromLocalStorage();
  const remainingApps = installedApps.filter(Id => Id != id);
  localStorage.setItem('installedApps', JSON.stringify(remainingApps));
}

export { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage }