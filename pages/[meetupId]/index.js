// the same way we have in regular React Project dynamic id (e.g:  our-domain/:id)

import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
import MeetupDetails from "../../components/meetups/MeetupDetails";
// our-domain/<dynamic-id>
const MeetupDetailsDynamicPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        {/* // that could be our meta description for this page and that will be the text that shows up when 
// our page shows up on Search engine (SEO) search */}
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails {...props.meetupData} />;
    </Fragment>
  );
};

// With getStaticProps a page is pre-generated during the Build Process
// now what does this mean? this means that of Coures NextJS to pregenerate all versions of this dynamic Page
// in advance for all the supported meetupId's because since thi is dynamic NextJS needs to know for which meetupsId's values
// it should pregenerate the page
// keep in mind that this is not pregenerated when the user visist thsi page with a specific meetupId but during the build process
// so here we need to pregenrate for all the potential url (meetupId's) user might be entering on Run Time
// and if they enter a value for which we did not pregenerage a page they will see a 404 Page not found error
// this is why we are using this getStaticPaths function where we describe all the dynamcis segments so all the meetupId's in this
// case where a page should be pregeneragted
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // meetupsCollection.find({}, {_id: 1});
  // {} retrieve all data with no filter criteria
  // and {_id: 1} we define that only the field _id will be extracted for every document
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // this fallback value determine whether the paths array return all the meetupId's value if set to false
    // or only some of them when set to true.
    // that means that if a user enter a meetupId path that is not supported in the paths array a 404 Page not found
    // will be retrieved
    fallback: false,
    // In reality we won't of course hardcode those values manually but fetch for your supported meetupId's from a database
    // or from an API and that will retrieve that array dynamcally
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  // Fetch data for a single meetup

  // To fetch the data for the meetup we need a way to identify the meetup
  // Here we need a way to identify the id and the id is thankfully encoded in th URL
  // and basically we could have use the useRouter hook from NextJS to identify the id and use the query to reach the meetupdId
  // But the problem is that the useRouter Hook can only be use in Component Function not in getStaticProps
  // Hopefully the getStaticProps also receive a context as Parameter
  // (although you cannot access the req and res as you do in getSerevrSideProps)
  // but has a params key
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
      //   meetupData: {
      //     id: meetupId,
      //     title: "A Second Meetup",
      //     image:
      //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
      //     address: "Some address 3, the best city",
      //     description: "this is a second meetup",
      //   },
    },
  };
};

export default MeetupDetailsDynamicPage;
