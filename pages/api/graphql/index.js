const main = async (req, res) => {

  const { query, variables } = req.body

  const url = `https://senheng-gql.testingnow.me/graphql?query=${query}&variables=${variables}`;
  const response = await fetch(url);
  const result = await response.json();

  res.status(200).json({ code: 200, ...result })

}

export default main;