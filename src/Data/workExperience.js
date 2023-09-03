



async function retrievePage(){
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_jzTdHyBia7h0HQ3BqYqSjO11xJR0fDxySvXJQKvmWj5",
});
    const listUsersResponse = await notion.pages.retrieve({page_id: "4774445a262a4994b9d55844dd8f16dc"});
  console.log(listUsersResponse);
};

export default retrievePage;
