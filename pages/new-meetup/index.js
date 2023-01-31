import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react/cjs/react.production.min";
// our-domain.com/new-meetup

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log("enteredMeetupData: ", enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("addMeetupHandler data :", data);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>New Meetup</title>
        {/* // that could be our meta description for this page and that will be the text that shows up when 
    // our page shows up on Search engine (SEO) search */}
        <meta
          name="description"
          content="Add your own Meetup and create amazing meetup"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
