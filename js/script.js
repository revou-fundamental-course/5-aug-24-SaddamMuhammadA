// Javascript Section

// Function untuk update age slider value----------------------------------------
function updateAgeValue() {
    const slideValue = document.querySelector(".bmi-range-age .slider-value span");
    const inputSlider = document.querySelector(".bmi-range-age input[type='range']");
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = (value / inputSlider.max) * 100 + "%";
  }
  
  // Function untuk update weight slider value----------------------------------
function updateWeightValue() {
    const slideValue = document.querySelector(".bmi-range-weight .slider-value span");
    const inputSlider = document.querySelector(".bmi-range-weight input[type='range']");
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = (value / inputSlider.max) * 100 + "%";
  }
  
  // Function untuk memilih gender selection---------------------------------------
function selectGender(element, gender) {
    const buttons = document.querySelectorAll('.gender-option');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
    element.classList.add('active');
    console.log("Jenis Kelamin yang dipilih:", gender);
  }

  // Fungsi untuk memilih tingkat aktivitas-----------------------------------------
function selectActivity(element, activity) {
    const buttons = document.querySelectorAll('.activity-option');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    element.classList.add('active');
    
    console.log("Tingkat Aktivitas yang dipilih:", activity);
}

// fungsi validasi dan alert-------------------------------------------------------
document.getElementById("calculate-button").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const activityLevel = document.querySelector('input[name="activity"]:checked');

    if (name === "") {
        alert("Masukan nama kamu");
        return;
    }
    if (age === "") {
        alert("Masukan usia kamu");
        return;
    }
    // if (!gender) {
    //     alert("Pilih gender kamu dahulu");
    //     return;
    // }
    if (height === "") {
        alert("Wajib Masukan Tinggi kamu");
        return;
    }
    if (weight === "") {
        alert("Geser Slider Sesuai Berat Badan Kamu");
        return;
    }
    // if (!activityLevel) {
    //     alert("Pilih Tingkat Aktivitas Harian kamu");
    //     return;
    // }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    displayBMIResult(bmi);
});

// Fungsi perhitungan BMI-------------------------------------------------------
function displayBMIResult(bmi) {
    let quality, recommendation, suggestion;

    if (bmi < 18.5) {
        quality = "Berat badan kurang";
        recommendation = "Kamu memiliki badan kurang dari ideal. Ayo lebih semangat lagi bulking badannya";
        suggestion = "Hasil BMI Kurang dari 18.5";
        suggestionDetail = `Saran Aktivitas: Fokus pada latihan kekuatan seperti angkat beban...
        Saran Makanan: Konsumsi makanan tinggi kalori...
        Pola Hidup: Cukup istirahat dan tidur...`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        quality = "Berat badan normal";
        recommendation = "Kamu memiliki badan yang ideal. Good Job, Pertahankan!!";
        suggestion = "Hasil BMI 18.5 - 24.9";
        suggestionDetail = `Saran Aktivitas: Lakukan kombinasi latihan kardiovaskular...
        Saran Makanan: Pertahankan pola makan seimbang...
        Pola Hidup: Terus jaga pola tidur yang teratur...`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        quality = "Kelebihan berat badan";
        recommendation = "Kamu memiliki berat badan yang berlebih. Ayo perbanyak olahraga dan makan makanan yang sehat. Semangat!!";
        suggestion = "Hasil BMI 25 - 29.9";
        suggestionDetail = `Saran Aktivitas: Tingkatkan aktivitas fisik dengan latihan kardiovaskular...
        Saran Makanan: Kurangi asupan kalori...
        Pola Hidup: Cobalah untuk menurunkan berat badan secara bertahap...`;
    } else if (bmi >= 30) {
        quality = "Obesitas";
        recommendation = "Kamu memiliki berat badan Obesitas. Ayo perbanyak olahraga, makan makanan yang sehat dan perbaiki pola hidup. Semangat!!";
        suggestion = "Hasil BMI 30 atau lebih";
        suggestionDetail = `Saran Aktivitas: Mulai dengan aktivitas fisik yang rendah dampak...
        Saran Makanan: Buat rencana makan yang rendah kalori...
        Pola Hidup: Fokus pada perubahan gaya hidup jangka panjang...`;
    }

    // Mengambil dan mengembalikan fungsi pada elemen html-----------------------------
    document.getElementById("hasil-kualitas").innerText = quality;
    document.getElementById("hasil-bmi").innerText = `BMI: ${bmi.toFixed(1)}`;
    document.getElementById("hasil-ket").innerText = recommendation;
    document.getElementById("kualitas-bmi").innerText = suggestion;
    document.getElementById("saran-bmi").innerText = suggestionDetail;

    document.getElementById("result-section").style.display = "block";
}

// Fungsi untuk Button Reset-------------------------------------------------------
document.getElementById("reset-button").addEventListener("click", function() {
    // Reset all inputs in the class "bmi-grid"
    document.querySelectorAll(".bmi-grid input").forEach(input => {
        if (input.type === "range") {
            input.value = input.defaultValue; // Reset range inputs to their default value
        } else if (input.type === "text" || input.type === "number") {
            input.value = ""; // Clear text and number inputs
        } else if (input.type === "radio") {
            input.checked = false; // Uncheck radio buttons
        }
    });

    // Reset activity level selection
    document.querySelectorAll(".activity-level button").forEach(button => {
        button.classList.remove("active"); // Remove active class from activity buttons
    });

    // Hide and reset the result section
    const resultSection = document.getElementById("result-section");
    resultSection.style.display = "none"; // Hide the result section
    resultSection.querySelectorAll("#hasil-kualitas, #hasil-bmi, #hasil-ket, #kualitas-bmi, #saran-bmi").forEach(element => {
        element.innerHTML = ""; // Clear the content of result elements
    });
});

