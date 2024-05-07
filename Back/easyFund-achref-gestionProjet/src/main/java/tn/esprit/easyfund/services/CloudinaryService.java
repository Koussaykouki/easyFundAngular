package tn.esprit.easyfund.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    private final Cloudinary cloudinary;


    public CloudinaryService() {
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
            "cloud_name", "dll0p7eka",
            "api_key", "168443798825798",
            "api_secret", "F9vJ9Ft2WMYl8vPTAEoJYuoRa-4"));
    }
    public String uploadImage(MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();

            Map uploadResult = cloudinary.uploader().upload(bytes, ObjectUtils.emptyMap());

            return (String) uploadResult.get("url");
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}

