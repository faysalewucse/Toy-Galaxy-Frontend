import { useEffect, useState } from "react";
import {
  Pagination,
  Modal,
  Input,
  Button,
  Text,
  Textarea,
  Loading,
} from "@nextui-org/react";
import ToysTable from "../components/ToysTable";
import { useAuth } from "../contexts/AuthContext";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";

export default function MyToys() {
  // set title
  useTitle("MY TOYS");

  //   current user
  const { currentUser } = useAuth();

  //   initializes variables
  const [toys, setToys] = useState([]);
  const [toyData, setToyData] = useState();
  const [totalToys, setTotalToys] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleDeleteConfirmationModal, setDeleteModalVisibility] =
    useState(false);
  const [loading, setLoading] = useState(true);

  const url = `${import.meta.env.VITE_BASE_API_URL}/mytoys/${
    currentUser.email
  }`;

  useEffect(() => {
    if (!visible) {
      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          setLoading(false);
          setToys(responseData.result);
          setTotalToys(responseData.totalToys);
        });
    }
  }, [visible]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedCars = loadedToys.find(
      (toy) => toy.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setToys([searchedCars]);
  };

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const openDeleteConfirmModal = () => setDeleteModalVisibility(true);
  const closeDeleteConfirmModal = () => setDeleteModalVisibility(false);

  const handlePage = async (pageNumber) => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/toys?pageNumber=${pageNumber}`
    );
    const result = await response.json();
    setToys(result);
  };

  // update toy data
  const updateToyDataHandler = (e) => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BASE_API_URL}/toy/${toyData._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          Swal.fire("Great!", "Toy Data Updated Succesfully", "success");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! " + error.message,
        });
      });
    closeModal();
  };

  // update toy data
  const deleteToy = (e) => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BASE_API_URL}/toy/${toyData._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          Swal.fire("Great!", "Toy Data Updated Succesfully", "success");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! " + error.message,
        });
      });
    closeModal();
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

      {loading ? (
        <div className="flex justify-center items-center">
          <Loading size="xl" />
        </div>
      ) : (
        <ToysTable
          toys={toys}
          ud={true}
          openModal={openModal}
          setToyData={setToyData}
          openDeleteConfirmModal={openDeleteConfirmModal}
        />
      )}

      <div className="mt-5">
        <Pagination
          onChange={(page) => handlePage(page)}
          total={Math.ceil(totalToys / 20)}
          initialPage={1}
        />
      </div>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Edit{" "}
            <Text b size={18}>
              Toy Info
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
            initialValue={toyData?.price}
            onChange={(e) =>
              setToyData((toyData) => {
                return { ...toyData, price: e.target.value };
              })
            }
            placeholder="Price"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            initialValue={toyData?.quantity}
            onChange={(e) =>
              setToyData((toyData) => {
                return { ...toyData, quantity: e.target.value };
              })
            }
            placeholder="Available Quantity"
          />
          <Textarea
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            initialValue={toyData?.description}
            onChange={(e) =>
              setToyData((toyData) => {
                return { ...toyData, description: e.target.value };
              })
            }
            placeholder="Descripotion"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Cancel
          </Button>
          <Button auto onPress={deleteToy}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
