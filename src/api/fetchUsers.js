const fetchDatas = async (url) => {
  console.log(url);
  try {
    const datas = await fetch(url)
      .then((response) => response.json())
      .then((json) => json);
    console.log(datas);
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDatas;
