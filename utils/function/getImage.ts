import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";

    export const getImage = async (img:string):Promise<any> => {
      const gsRef = ref(
        storage,
        `${process.env.NEXT_PUBLIC_FIRESTORAGE_URL}/image/${img}`
      );

      const image = await getDownloadURL(gsRef)
        .then((url) => {
          return url;
        })
        .catch((error) => {return error});
        return image;
    };
