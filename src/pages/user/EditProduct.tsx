import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProductCategories,
  useGetSingleProduct,
} from "../../api/product";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import { UserContext } from "../../utils/userContext";
import { useGetRegions } from "../../api/region";
import * as Yup from "yup";
import Loader from "../../components/loader/Loader";
import { FaRegTrashCan } from "react-icons/fa6";

export default function EditProduct() {
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    if (!slug) {
      navigate(-1);
    }
  }, []);
  const { user } = useContext(UserContext);
  const { data: product, isLoading } = useGetSingleProduct(slug || "");
  const { data: productCategories, isLoading: isLoadingProductCategories } =
    useGetProductCategories();
  const { data: regions, isLoading: isLoadingRegions } = useGetRegions();

  const [selectedRegion, setSelectedRegion] = useState<{
    state: any;
    lcda: any;
    selectedLcda: any;
    region: any;
  }>({
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
      const selected = regions?.filter(
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
    if (user?.address) {
      formik.setFieldValue("location", user.address);
    }
  };

  const [useDefaultRegion, setUseDefaultRegion] = useState(false);
  const handleUseDefaultRegion = () => {
    setUseDefaultRegion((prev) => !prev);
    if (user?.regionId) {
      formik.setFieldValue("regionId", user.regionId);
    }
  };

  const initialValues = {
    name: product?.name || "",
    description: product?.description || "",
    unitPrice: product?.unitPrice || "",
    unit: product?.unit || "",
    unitWeight: product?.unitWeight || "",
    quantity: product?.quantity || "",
    categoryId: product?.categoryId || "",
    location: product?.location || "",
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

  const handleEditProduct = async (values: typeof initialValues) => {
    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, String(values[key as keyof typeof values]));
      }
    }

    // append images
    if (images && images.length > 0) {
      images.forEach((image) => {
        formData.append("images", image);
      });
    }

    // await createProduct(formData).then((res) => {
    //   if (res) {
    //     navigate("/seller/products");
    //   }
    // });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleEditProduct,
    enableReinitialize: true,
  });

  const [images, setImages] = useState<File[]>([]);

  const handleUploadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const imgFiles = Array.from(files);
      setImages(imgFiles);
    }
  };

  const handleRemoveImg = (idx: number) => {
    const fileInput = document.getElementById("images") as HTMLInputElement;
    const newImgArray = images.filter((_, i) => i !== idx);

    const newFileList = new DataTransfer();
    newImgArray.forEach((item) => {
      newFileList.items.add(item);
    });
    fileInput.files = newFileList.files;
    setImages(newImgArray);
  };

  const [defaultProductImgs, setDefaultProductImgs] = useState<string[]>([]);

  useEffect(() => {
    const imagesArray =
      product?.images && product?.images?.length > 0
        ? [...product?.images]
        : [];
    setDefaultProductImgs(imagesArray);
  }, [product]);

  const handleRemoveDefaultImg = (image: string) => {
    const newImagesArray = defaultProductImgs.filter((img) => img !== image);
    setDefaultProductImgs(newImagesArray);
  };

  if (isLoading) {
    return <Loader />;
  }

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
            placeholder={formik.initialValues.name}
            className="input input-bordered w-full"
          />
          <ErrorMessage formik={formik} fieldName="name" />
        </label>

        <label htmlFor="description" className="block mb-6">
          <p className="text-sm uppercase">product description</p>
          <textarea
            {...formik.getFieldProps("description")}
            className="textarea textarea-bordered  w-full"
          />
          <ErrorMessage formik={formik} fieldName="description" />
        </label>

        <label htmlFor="unitPrice" className="block mb-6">
          <p className="text-sm uppercase">product unit price (ngn)</p>
          <input
            type="number"
            {...formik.getFieldProps("unitPrice")}
            className="input input-bordered w-full"
          />
          <ErrorMessage formik={formik} fieldName="unitPrice" />
        </label>

        <label htmlFor="unit" className="block mb-6">
          <p className="text-sm uppercase">
            PRODUCT UNIT (KG, CRATES, LITERS, BAGS ETC)
          </p>
          <input
            {...formik.getFieldProps("unit")}
            className="input input-bordered w-full"
          />
          <ErrorMessage formik={formik} fieldName="unit" />
        </label>

        <label htmlFor="unitWeight" className="block mb-6">
          <p className="text-sm uppercase">PRODUCT UNIT WEIGHT</p>
          <input
            {...formik.getFieldProps("unitWeight")}
            className="input input-bordered w-full"
          />
          <ErrorMessage formik={formik} fieldName="unitWeight" />
        </label>

        <label htmlFor="quantity" className="block mb-6">
          <p className="text-sm uppercase">PRODUCT QUANTITY AVAILABLE</p>
          <input
            type="number"
            {...formik.getFieldProps("quantity")}
            className="input input-bordered w-full"
          />
          <ErrorMessage formik={formik} fieldName="quantity" />
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
          <ErrorMessage formik={formik} fieldName="categoryId" />
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
                name="state"
                defaultValue="Lagos"
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
                {selectedRegion?.lcda?.map((item: string, idx: number) => (
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
                  ?.sort(
                    (a: Record<string, string>, b: Record<string, string>) =>
                      a.name.localeCompare(b.name)
                  )
                  .map((item: Record<string, string>, idx: any) => (
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
              Use my default region (State - {user?.region?.state}, LCDA -{" "}
              {user?.region?.lcda}, Region -{user?.region?.name})
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

        {defaultProductImgs.length > 0 ? (
          <div className="flex items-center gap-2 mt-6">
            {defaultProductImgs.map((image, idx) => (
              <div
                key={idx}
                className="w-24 h-24 flex items-center justify-center rounded-md bg-black relative overflow-hidden"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover hover:opacity-60 transition-opacity peer"
                  onClick={() => handleRemoveDefaultImg(image)}
                />
                <FaRegTrashCan className="text-white text-lg absolute pointer-events-none hidden peer-hover:block" />
              </div>
            ))}
          </div>
        ) : (
          images.length > 0 && (
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
          )
        )}

        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="btn btn-outline uppercase border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr"
            disabled={false}
          >
            {false ? (
              <span className="loading loading-dots loading-md bg-orange-clr" />
            ) : (
              "update product"
            )}
          </button>
        </div>
      </form>
    </>
  );
}
