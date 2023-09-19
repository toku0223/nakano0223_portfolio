import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY as string });
const DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

export const testFunc = async ({
  name,
  tag,
  URL,
}:
  {
    name?: string;
    tag?: string;
    URL?: string;
  }) => {

console.log("test",DATABASE_ID)
  return await notion.databases.query({
    database_id: DATABASE_ID,
    
    
  });
};

export const formatDateToKanji = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}年${addLeadingZero(month)}月${addLeadingZero(day)}日`;
  return formattedDate;
}

function addLeadingZero(number: number) {
  return number < 10 ? '0' + number : number;
}
