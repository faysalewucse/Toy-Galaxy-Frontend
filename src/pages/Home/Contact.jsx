import contact from "../../assets/contact.png";
import PrimaryButton from "../../components/PrimaryButton";
import { Input, Textarea } from "@nextui-org/react";

export default function Contact() {
  return (
    <div className="md:p-20 p-5 bg-primary">
      <div className="max-w-screen-2xl mx-auto shadow-lg rounded-3xl md:flex gap-10 items-center justify-between bg-white">
        <div className="p-5 md:px-20 text-center md:text-left md:w-1/2">
          <h1 className="font-bold text-2xl md:text-6xl text-primary">
            Contact Us
          </h1>
          <p className="my-5 text-justify">
            For home delivery with a reasonable price contact us. We will
            provide the items to your door.
          </p>
          <div className="flex flex-col gap-5 my-14">
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Name"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Product Link"
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Phone"
            />
            <Textarea
              clearable
              bordered
              fullWidth
              color="primary"
              size="xl"
              placeholder="Message"
            />
          </div>
          <PrimaryButton text={"SEND"} style={"md:w-1/3 rounded-xl"} />
        </div>
        <img
          className="hidden md:block md:w-1/2 rounded-b-3xl md:rounded-r-3xl md:rounded-tl-none object-cover"
          src={contact}
          alt="contact"
        />
      </div>
    </div>
  );
}
