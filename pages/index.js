import Head from "next/head";
// our-domain.com/
// import { useState, useEffect } from "react/cjs/react.development";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react/cjs/react.production.min";
// our-domain.com/new-meetup

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 123gg Some city",
//     description: "this is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 3, the best city",
//     description: "this is a second meetup",
//   },
// ];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  // // in the first Render cycle of the Component the
  // // loadedMeetups value will have the empty array as a default value
  // return <MeetupList meetups={loadedMeetups} />;

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        {/* // that could be our meta description for this page and that will be the text that shows up when 
        // our page shows up on Search engine (SEO) search */}
        <meta
          name="description"
          content="Browse a huge list of highly active meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};
// Only in Component Files inside the Page Folder
// you can export the getStaticProps function (the name is important)
// this is as reserve Name. NextJS Will look for a function
// with that name and if it finds it will execute that function
// during the Prerendering process so that it will not direclty call our
// component function and use the return jsx snapshot as html content but
// will first of all call the getStaticProps before it call the Component function
// getStaticProps has this name because indeed his job is to prepare props for this page
// and this props could then get contains the data this page needs.
// and that usefull because getStaticProps is allowed to be asynchronous.
// You can return a promise and then... this is the key thing NextJS will wait until this promise to
// resolve which means it waits your data is loaded to return the props for the component function.
// And with that you're able to load data before component function is executed
// so that this component can be rendered with the require data.
// that mean that data SEO will have access to the data also
export const getStaticProps = async () => {
  // in this function you can also execute any code that will
  // normally run on a server...
  // you can access a fileSystem here or securely connect to a Database
  // because any code is written here will never endup or run on Client side
  // simply because this code is executed during the Build Process
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  // Close the client connection
  client.close();

  return {
    props: {
      // this is the object we receive as props in the Component functio
      // const HomePage = (props) => {...
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // because the id should be converted to a string we must proceed map on meetups to transform the data
        // instead as using it's default value
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};
// export const getServerSideProps = async (context) => {
//   // Just like getStaticProps this is a reserved name.
//   // This function will not run during the build process but instead on the server
//   // after deployment.
//   // We can still fetch data from an API or from the fileSystem and any code you write here
//   // will always run on the server never in the Client
//   // so you can do operation that use credentials for example
//   // if you need you can have access to the incoming request and response through the contex
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // this code will run for every incoming request and not after a revalidate delay
//   };
// };
export default HomePage;
