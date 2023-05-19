import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Pagination,
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
} from "@nextui-org/react";
import ToysTable from "../components/ToysTable";
import { useAuth } from "../contexts/AuthContext";
import useTitle from "../hooks/useTitle";

export default function MyToys() {
  // set title
  useTitle("MY TOYS");

  //   current user
  const { currentUser } = useAuth();

  //   initializes variables
  const [toys, setToys] = useState([]);
  const [totalToys, setTotalToys] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const url = `${import.meta.env.VITE_BASE_API_URL}/mytoys/${
    currentUser.email
  }`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setToys(responseData.result);
        setTotalToys(responseData.totalToys);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedCars = loadedToys.find(
      (toy) => toy.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setToys([searchedCars]);
  };

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const handlePage = async (pageNumber) => {
    console.log(pageNumber);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/toys?pageNumber=${pageNumber}`
    );
    const result = await response.json();
    setToys(result);
  };

  return (
    <div className="max-w-7xl mx-auto py-20 min-h-[50vh]">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        My Toys
      </h1>

      <form
        onSubmit={handleSearch}
        className="mb-6 md:block flex justify-center"
      >
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="px-4 py-2 border border-gray-300 rounded-md mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Search
        </button>
      </form>

      <ToysTable toys={toys} ud={true} />

      <div className="mt-5">
        <Pagination
          onChange={(page) => handlePage(page)}
          total={Math.ceil(totalToys / 20)}
          initialPage={1}
        />
      </div>
      {/* <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Close
          </Button>
          <Button auto onPress={closeModal}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}
