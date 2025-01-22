import { useCreateProduct, useGetProductCategories } from "../../api/product";
import { useGetRegions } from "../../api/region";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/userContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegTrashCan } from "react-icons/fa6";

export default function CreateProduct() {
  const navigate = useNavigate();
  const user = useContext(UserContext).user;
  const { mutateAsync: createProduct, isLoading: isCreatingProduct } =
    useCreateProduct();

  const handleCreateProduct = async (values) => {
    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
      }
    }

    // append images
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    }

    await createProduct(formData).then((res) => {
      if (res) {
        navigate("/seller/products");
      }
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Product description is required"),
    categoryId: Yup.string().required("Product category is required"),
    unitWeight: Yup.string().required("Product unit weight is required"),
    unitPrice: Yup.string().required("Product unit price is required"),
    quantity: Yup.string().required("Product available quantity is required"),
    unit: Yup.string().required("Product unit is required"),
  });

  const initialValues = {
    name: "",
    description: "",
    categoryId: "",
    sellerId: user?.id,
    location: "",
    regionId: "",
    unitWeight: "",
    unitPrice: "",
    quantity: "",
    unit: "",
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: handleCreateProduct,
  });

  const { isLoading: isLoadingProductCategories, data: productCategories } =
    useGetProductCategories();

  const { isLoading: isLoadingRegions, data: regions } = useGetRegions();
  const [selectedRegion, setSelectedRegion] = useState({
    state: null,
    lcda: null,
    selectedLcda: null,
    region: null,
  });

  // Set selected lcda
  useEffect(() => {
    if (regions) {
      const selected = [...new Set(regions.map((region) => region.lcda))];

      setSelectedRegion((prev) => ({
        ...prev,
        lcda: selected,
      }));
    }
  }, [selectedRegion.state]);

  // Set selected region
  useEffect(() => {
    if (selectedRegion.selectedLcda) {
      const selected = regions.filter(
        (item) => item.lcda === selectedRegion.selectedLcda
      );

      setSelectedRegion((prev) => ({
        ...prev,
        region: selected,
      }));
    }
  }, [selectedRegion.selectedLcda]);

  const [useDefaultLocation, setUseDefaultLocation] = useState(false);
  const handleUseDefaultLocation = () => {
    setUseDefaultLocation((prev) => !prev);
    if (user.address) {
      formik.setFieldValue("location", user.address);
    }
  };

  const [useDefaultRegion, setUseDefaultRegion] = useState(false);
  const handleUseDefaultRegion = () => {
    setUseDefaultRegion((prev) => !prev);
    if (user.regionId) {
      formik.setFieldValue("regionId", user.regionId);
    }
  };

  const [images, setImages] = useState([]);

  const handleUploadImages = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const imgFiles = Array.from(files);
      setImages(imgFiles);
    }
  };

  const handleRemoveImg = (idx) => {
    const fileInput = document.getElementById("images");
    const newImgArray = images.filter((_, i) => i !== idx);

    const newFileList = new DataTransfer();
    newImgArray.forEach((item) => {
      newFileList.items.add(item);
    });
    fileInput.files = newFileList.files;
    setImages(newImgArray);
  };

  return (
    <>
      <h2 className="hidden md:block font-semibold text-2xl pb-2 border-b">
        CREATE PRODUCT
      </h2>

      <form className="my-6 w-full px-2" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="block mb-6">
          <p className="text-sm uppercase">product name</p>
          <input
            {...formik.getFieldProps("name")}
            className="input input-bordered w-full"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-sm text-red-400">{formik.errors.name}</p>
          )}
        </label>

        <label htmlFor="description" className="block mb-6">
          <p className="text-sm uppercase">product description</p>
          <textarea
            {...formik.getFieldProps("description")}
            className="textarea textarea-bordered  w-full"
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-sm text-red-400">{formik.errors.description}</p>
          )}
        </label>

        <label htmlFor="unitPrice" className="block mb-6">
          <p className="text-sm uppercase">product unit price (ngn)</p>
          <input
            type="number"
            {...formik.getFieldProps("unitPrice")}
            className="input input-bordered w-full"
          />
          {formik.touched.unitPrice && formik.errors.unitPrice && (
            <p className="text-sm text-red-400">{formik.errors.unitPrice}</p>
          )}
        </label>

        <label htmlFor="unit" className="block mb-6">
          <p className="text-sm uppercase">
            PRODUCT UNIT (KG, CRATES, LITERS, BAGS ETC)
          </p>
          <input
            {...formik.getFieldProps("unit")}
            className="input input-bordered w-full"
          />
          {formik.touched.unit && formik.errors.unit && (
            <p className="text-sm text-red-400">{formik.errors.unit}</p>
          )}
        </label>

        <label htmlFor="unitWeight" className="block mb-6">
          <p className="text-sm uppercase">PRODUCT UNIT WEIGHT</p>
          <input
            {...formik.getFieldProps("unitWeight")}
            className="input input-bordered w-full"
          />
          {formik.touched.unitWeight && formik.errors.unitWeight && (
            <p className="text-sm text-red-400">{formik.errors.unitWeight}</p>
          )}
        </label>

        <label htmlFor="quantity" className="block mb-6">
          <p className="text-sm uppercase">PRODUCT QUANTITY AVAILABLE</p>
          <input
            type="number"
            {...formik.getFieldProps("quantity")}
            className="input input-bordered w-full"
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <p className="text-sm text-red-400">{formik.errors.quantity}</p>
          )}
        </label>

        <label htmlFor="categoryId" className="w-full block mb-6">
          <p className="text-sm uppercase">PRODUCT CATEGORY</p>
          <select
            className="select select-bordered w-full"
            {...formik.getFieldProps("categoryId")}
            disabled={isLoadingProductCategories}
          >
            <option value="" disabled>
              -- Select Product Category --
            </option>
            {productCategories?.map((item, idx) => (
              <option value={item.id} key={idx}>
                {item.name}
              </option>
            ))}
          </select>
          {formik.touched.categoryId && formik.errors.categoryId && (
            <p className="text-sm text-red-400">{formik.errors.categoryId}</p>
          )}
        </label>

        <div className="w-full block mb-6">
          <label htmlFor="location">
            <p className="text-sm uppercase">PRODUCT LOCATION</p>
            <input
              type="text"
              {...formik.getFieldProps("location")}
              className="input input-bordered w-full"
              disabled={useDefaultLocation}
            />
          </label>
          {user?.address && (
            <label
              htmlFor="useDefaultLocation"
              className="flex items-center gap-2 mt-2"
              onChange={handleUseDefaultLocation}
            >
              <input type="checkbox" id="useDefaultLocation" />
              <p className="text-sm">
                Use my default address ({user?.address})
              </p>
            </label>
          )}
        </div>

        <div className="block mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <label htmlFor="state" className="block w-full">
              <p className="text-sm uppercase">PRODUCT STATE</p>
              <select
                className="select select-bordered w-full"
                defaultValue=""
                name="state"
                disabled={
                  isLoadingRegions ||
                  !regions ||
                  regions?.length < 1 ||
                  useDefaultRegion
                }
                onChange={(e) =>
                  setSelectedRegion((prev) => ({
                    ...prev,
                    state: e.target.value,
                  }))
                }
              >
                <option value="" disabled>
                  -- Select State --
                </option>
                <option value="Lagos">Lagos</option>
              </select>
            </label>

            <label htmlFor="lcda" className="block w-full">
              <p className="text-sm uppercase">PRODUCT LCDA</p>
              <select
                className="select select-bordered w-full"
                defaultValue=""
                name="lcda"
                disabled={
                  isLoadingRegions || !selectedRegion.state || useDefaultRegion
                }
                onChange={(e) =>
                  setSelectedRegion((prev) => ({
                    ...prev,
                    selectedLcda: e.target.value,
                  }))
                }
              >
                <option value="" disabled>
                  -- Select Lcda --
                </option>
                {selectedRegion?.lcda?.map((item, idx) => (
                  <option value={item} key={idx}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="regionId" className="block w-full">
              <p className="text-sm uppercase">PRODUCT REGION</p>
              <select
                className="select select-bordered w-full"
                {...formik.getFieldProps("regionId")}
                disabled={
                  isLoadingRegions ||
                  !selectedRegion.selectedLcda ||
                  useDefaultRegion
                }
              >
                <option value="" disabled>
                  -- Select Region --
                </option>
                {selectedRegion?.region
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  .map((item, idx) => (
                    <option value={item.id} key={idx}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <label
            htmlFor="defaultRegion"
            className="flex items-center gap-2 mt-2"
            onChange={handleUseDefaultRegion}
          >
            <input type="checkbox" name="defaultRegion" id="defaultRegion" />
            <p className="text-sm">
              Use my default region (State - {user.region.state}, LCDA -{" "}
              {user.region.lcda}, Region -{user.region.name})
            </p>
          </label>
        </div>

        <label htmlFor="images">
          <p className="text-sm uppercase">
            PRODUCT IMAGES (YOU CAN ADD MULTIPLE IMAGES)
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            maxLength={5}
            max={5}
            name="images"
            id="images"
            className="file-input file-input-bordered text-sm w-full max-w-md"
            onChange={handleUploadImages}
          />
        </label>

        {images.length > 0 && (
          <div className="flex items-center gap-2 mt-6">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="w-24 h-24 flex items-center justify-center rounded-md bg-black relative overflow-hidden"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="w-full h-full object-cover hover:opacity-60 transition-opacity peer"
                  onClick={() => handleRemoveImg(idx)}
                />
                <FaRegTrashCan className="text-white text-lg absolute pointer-events-none hidden peer-hover:block" />
              </div>
            ))}
          </div>
        )}

        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="btn btn-outline uppercase border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr"
            disabled={isCreatingProduct}
          >
            {isCreatingProduct ? (
              <span className="loading loading-dots loading-md bg-orange-clr" />
            ) : (
              "create product"
            )}
          </button>
        </div>
      </form>
    </>
  );
}
