// Static catalog data for the public website.
//
// Departments, doctors, and partnerships used to be fetched from the backend
// API. The backend has been removed, so this file is the single source of
// truth. Edit here to update the Departments, Doctors, and Partnerships pages.

import { Department, Doctor, Partnership } from '../types';

export const departments: Department[] = [
  {
    id: 1,
    name: 'Outpatient Department (OPD)',
    nameKm: 'ផ្នែកពិគ្រោះជំងឺក្រៅ',
    code: 'OPD',
    head: 'Asst. Prof. Lam Kaovin',
    beds: 30,
    occupancy: 75,
    status: 'open',
    description:
      'Provides medical consultations, diagnostic evaluations, and treatments for patients who do not require overnight hospitalization.',
    descKm:
      'ផ្តល់សេវាពិគ្រោះ ពិនិត្យវិភាគរោគសញ្ញា និងព្យាបាលអ្នកជំងឺដែលមិនតម្រូវឱ្យសម្រាកគេងនៅមន្ទីរពេទ្យ។',
    image: '/image/departments/opd.jpg',
  },
  {
    id: 2,
    name: 'Emergency Department',
    nameKm: 'ផ្នែកសង្គ្រោះបន្ទាន់',
    code: 'EMERGENCY',
    head: 'Dr. Chuob Sambath',
    beds: 20,
    occupancy: 85,
    status: 'open',
    description:
      'Delivers immediate 24/7 medical care for acute illnesses, severe trauma, and life-threatening conditions.',
    descKm:
      'ផ្តល់ការសង្គ្រោះ និងព្យាបាលបន្ទាន់ ២៤ ម៉ោងលើ ២៤ ម៉ោង សម្រាប់ករណីគ្រោះថ្នាក់ចៃដន្យ ជំងឺធ្ងន់ធ្ងរ ឬស្ថានភាពគំរាមកំហែងដល់អាយុជីវិត។',
    image: '/image/departments/ED.JPG',
  },
  {
    id: 3,
    name: 'Medical Imaging & Radiology',
    nameKm: 'ផ្នែកវេជ្ជសាស្ត្ររូបភាព និងរោគវិនិច្ឆ័យដោយកាំរស្មី',
    code: 'RADIOLOGY',
    head: 'Dr. Kong Reasmey',
    beds: 15,
    occupancy: 60,
    status: 'open',
    description:
      'Uses advanced imaging technologies (X-ray, CT scan, MRI, ultrasound) to accurately diagnose and monitor medical conditions.',
    descKm:
      'ប្រើប្រាស់បច្ចេកវិទ្យារូបភាពទំនើបៗ (ដូចជា អ៊ិចរ៉េ អេកូ ស្កេន CT និង MRI) ដើម្បីធ្វើរោគវិនិច្ឆ័យ និងតាមដានស្ថានភាពជំងឺបានច្បាស់លាស់។',
    image: '/image/departments/Radiology.JPG',
  },
  {
    id: 4,
    name: 'Oncology & Radiotherapy',
    nameKm: 'ផ្នែកជំងឺមហារីក និងព្យាបាលដោយកាំរស្មី',
    code: 'ONCOLOGY',
    head: 'Dr. Kang Sonnarin',
    beds: 40,
    occupancy: 72,
    status: 'open',
    description:
      'Specializes in comprehensive cancer care, including systemic therapies, targeted radiation treatments, and supportive care.',
    descKm:
      'ជំនាញក្នុងការថែទាំ និងព្យាបាលជំងឺមហារីកគ្រប់ជ្រុងជ្រោយ រួមមានការព្យាបាលដោយគីមី ការបាញ់កាំរស្មី និងការថែទាំលើកកម្ពស់គុណភាពជីវិត។',
    image: '/image/departments/linac.jpg',
  },
  {
    id: 5,
    name: 'Laboratory Department',
    nameKm: 'ផ្នែកមន្ទីរពិសោធន៍ ',
    code: 'LAB',
    head: 'Mr. Penh Sakdo, M.Sc.',
    beds: 10,
    occupancy: 40,
    status: 'open',
    description:
      'Performs clinical tests on blood, bodily fluids, and tissue samples to assist in precise disease diagnosis and management.',
    descKm:
      'ធ្វើតេស្តវិភាគសំណាកឈាម ទឹករាវក្នុងរាងកាយ និងជាលិកា ដើម្បីជួយគ្រូពេទ្យធ្វើរោគវិនិច្ឆ័យ និងកំណត់វិធីព្យាបាលបានត្រឹមត្រូវ។',
    image: '/image/departments/lab.JPG',
  },
  {
    id: 6,
    name: 'Anatomical Pathology',
    nameKm: 'ផ្នែកកាយវិភាគរោគវិទ្យា',
    code: 'ANATOMICAL_PATHOLOGY',
    beds: 0,
    occupancy: 0,
    status: 'open',
    description:
      'Examines tissue and cell samples to diagnose cancer and other diseases, and manages the mortuary unit.',
    descKm:
      'ពិនិត្យសំណាកជាលិកា និងកោសិកា ដើម្បីធ្វើរោគវិនិច្ឆ័យជំងឺមហារីក និងជំងឺផ្សេងៗ ព្រមទាំងគ្រប់គ្រងអង្គភាពរក្សាសព។',
    image: '/image/departments/lab1.JPG',
  },
  {
    id: 8,
    name: 'Gynecologic Oncology Surgery Department',
    nameKm: 'ផ្នែកវះកាត់មហារីករោគស្រ្តី',
    code: 'GYNECOLOGIC_ONCOLOGY',
    head: 'Dr. Chek Sokban',
    beds: 18,
    occupancy: 62,
    status: 'open',
    description:
      'Specializes in the surgical diagnosis, staging, and treatment of cancers affecting the female reproductive system, including ovarian, cervical, uterine, vaginal, and vulvar malignancies.',
    descKm: null,
    image: '/image/departments/gynecology.png',
  },
  {
    id: 9,
    name: 'Surgical Oncology Department',
    nameKm: 'ផ្នែកវះកាត់មហារីក',
    code: 'SURGICAL_ONCOLOGY',
    head: 'Dr. Chek Sokchea',
    beds: 30,
    occupancy: 90,
    status: 'open',
    description:
      'Specializes in the surgical management and resection of solid malignant tumors, including diagnostic biopsies, tumor removals, and reconstructive cancer surgeries.',
    descKm: null,
    image: '/image/departments/surgical-1.jpg',
  },
  {
    id: 10,
    name: 'Social Welfare, Health Insurance, and Patient Services Department',
    nameKm: 'ផ្នែកគាំពាសុខមាលភាពសង្គម ធានារ៉ាប់រង និងសេវាកម្ម',
    code: 'SOCIAL_SERVICES',
    head: 'Dr. Meas Thida',
    beds: 0,
    occupancy: 0,
    status: 'open',
    description:
      'Coordinates patient administrative support, manages public health insurance schemes such as NSSF and Health Equity Funds, and connects vulnerable patients with financial and social welfare assistance.',
    descKm: null,
    image: '/image/departments/nssf.JPG',
  },
  {
    id: 11,
    name: 'Pharmacy',
    nameKm: 'ឱសថស្ថាន',
    code: 'PHARMACY',
    head: 'Pharm. Nin Sreynich',
    beds: 0,
    occupancy: 0,
    status: 'open',
    description:
      'Dispenses medications, provides medication counseling, and manages pharmaceutical supplies to ensure safe drug therapy.',
    descKm:
      'ចែកចាយ និងផ្តល់ថ្នាំពេទ្យ ប្រឹក្សាយោបល់អំពីរបៀបប្រើប្រាស់ថ្នាំ និងធានានូវសុវត្ថិភាពខ្ពស់ក្នុងការប្រើប្រាស់ឱសថ។',
    image: '/image/departments/pharmacy.jpg',
  },
  {
    id: 12,
    name: 'Endoscopy Department',
    nameKm: 'ផ្នែកឆ្លុះពិនិត្យ (ឆ្លុះក្រពះ ពោះវៀន)',
    code: 'ENDOSCOPY',
    head: 'Dr. Vong Vathanak',
    beds: 8,
    occupancy: 50,
    status: 'open',
    description:
      'Uses specialized camera scopes to examine, biopsy, and treat disorders within the gastrointestinal tract and internal organs.',
    descKm:
      'ប្រើប្រាស់ឧបករណ៍កាមេរ៉ាឆ្លុះដើម្បីពិនិត្យ យកជាលិកាធ្វើតេស្ត និងព្យាបាលបញ្ហាផ្សេងៗក្នុងប្រព័ន្ធរំលាយអាហារ ដូចជា ក្រពះ និងពោះវៀន។',
    image: '/image/departments/endoscpy.jpg',
  },
  {
    id: 13,
    name: 'Intensive Care Unit - ICU',
    nameKm: 'ផ្នែកថែទាំអ្នកជំងឺកម្រិតធ្ងន់ - ICU',
    code: 'ICU',
    head: 'Head: Dr. Chheang Kho',
    beds: 10,
    occupancy: 55,
    status: 'open',
    description:
      'Provides continuous monitoring, advanced life-support systems, and specialized care for critically ill patients.',
    descKm:
      'ផ្តល់ការតាមដានជាបន្តបន្ទាប់ និងឧបករណ៍ជួយរស់ទំនើប សម្រាប់អ្នកជំងឺដែលស្ថិតក្នុងស្ថានភាពធ្ងន់ធ្ងរ និងត្រូវការថែទាំពិសេស។',
    image: '/image/departments/ICU.jpg',
  },
];

const departmentById = new Map(departments.map((d) => [d.id, d]));
const linkDept = (id: number) => {
  const d = departmentById.get(id);
  return d ? { id: d.id, name: d.name, nameKm: d.nameKm, code: d.code, beds: d.beds, occupancy: d.occupancy, status: d.status } : null;
};

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Asst. Prof. Lam Kaovin',
    nameKm: 'លោកសាស្ត្រ.ជំនួយ ឡាំ កោវិន',
    specialty: 'Deputy Head of Technical Office and Head of Outpatient Department',
    specialtyKm: 'អនុប្រធានការិយាល័យបច្ចេកទេស និងជានាយផ្នែកពិគ្រោះជំងឺក្រៅ',
    departmentId: 1,
    status: 'active',
    image: '/image/pic1.jpg',
    department: linkDept(1),
  },
  {
    id: 2,
    name: 'Dr. Chheang Kho',
    nameKm: 'លោកវេជ្ជ.ឯកទេស ឈាង ឃោ',
    specialty: 'Head of Intensive Care Unit (ICU)',
    specialtyKm: 'នាយផ្នែកថែទាំអ្នកជំងឺកម្រិតធ្ងន់ (ICU)',
    departmentId: 13,
    status: 'active',
    image: '/image/pic2.png',
    department: linkDept(13),
  },
  {
    id: 3,
    name: 'Dr. Kang Sonnarin',
    nameKm: 'លោកវេជ្ជ.ឯកទេស កាង សុន្នរិន',
    specialty: 'Head of Medical Oncology and Radiotherapy Department',
    specialtyKm: 'នាយផ្នែកជំងឺមហារីក និងព្យាបាលដោយកាំរស្មី',
    departmentId: 4,
    status: 'active',
    image: '/image/pic3.png',
    department: linkDept(4),
  },
  {
    id: 4,
    name: 'Dr. Chek Sokchea',
    nameKm: 'លោកវេជ្ជ.ឯកទេស ចឹក សុខជា',
    specialty: 'Head of Surgical Oncology Department',
    specialtyKm: 'នាយផ្នែកវះកាត់មហារីក',
    departmentId: 9,
    status: 'active',
    image: '/image/pic4.png',
    department: linkDept(9),
  },
  {
    id: 5,
    name: 'Dr. Chek Sokban',
    nameKm: 'លោកវេជ្ជ.ឯកទេស ចឹក សុខបាន',
    specialty: 'Head of Gynecologic Oncology Surgery Department',
    specialtyKm: 'នាយផ្នែកវះកាត់មហារីករោគស្រ្តី',
    departmentId: 8,
    status: 'active',
    image: '/image/pic5.png',
    department: linkDept(8),
  },
  {
    id: 6,
    name: 'Dr. Chuob Sambath',
    nameKm: 'លោកវេជ្ជ.ឯកទេស ជួប សម្បត្តិ',
    specialty: 'Head of Emergency Department',
    specialtyKm: 'នាយផ្នែកសង្គ្រោះបន្ទាន់',
    departmentId: 2,
    status: 'active',
    image: '/image/pic6.png',
    department: linkDept(2),
  },
  {
    id: 7,
    name: 'Dr. Kong Reasmey',
    nameKm: 'លោកវេជ្ជ.ឯកទេស គង់ រស្មី',
    specialty: 'Head of Medical Imaging and Interventional Radiology Department',
    specialtyKm: 'នាយផ្នែករូបភាពវេជ្ជសាស្ត្រ និងអន្តរាគមន៍វិទ្យុសាស្រ្ត',
    departmentId: 3,
    status: 'active',
    image: '/image/pic7.png',
    department: linkDept(3),
  },
  {
    id: 8,
    name: 'Mr. Penh Sakdo.',
    nameKm: 'លោកអនុបណ្ឌិត ពេញ សាក់ក្ដូ',
    specialty: 'Head of Clinical Laboratory Department',
    specialtyKm: 'នាយផ្នែកមន្ទីរពិសោធន៍',
    departmentId: 5,
    status: 'active',
    image: '/image/pic8.png',
    department: linkDept(5),
  },
  {
    id: 9,
    name: 'Pharm. Nin Sreynich',
    nameKm: 'លោកស្រីឱសថការី និន ស្រីនិច',
    specialty: 'Head of Pharmacy Department',
    specialtyKm: 'នាយផ្នែកឱសថស្ថាន',
    departmentId: 11,
    status: 'active',
    image: '/image/pic9.png',
    department: linkDept(11),
  },
  {
    id: 10,
    name: 'Dr. Vong Vathanak',
    nameKm: 'លោកវេជ្ជ.ឯកទេស វង្ស វឌ្ឍនៈ',
    specialty: 'Head of Endoscopy Department',
    specialtyKm: 'នាយផ្នែកអង់ដូស្គូពី',
    departmentId: 12,
    status: 'active',
    image: '/image/pic10.png',
    department: linkDept(12),
  },
  {
    id: 11,
    name: 'Dr. Meas Thida',
    nameKm: 'លោកស្រីវេជ្ជ.ឯកទេស មាស ធីតា',
    specialty: 'Head of Social Welfare, Insurance, and Patient Services Department',
    specialtyKm: 'នាយផ្នែកគាំពាសុខមាលភាពសង្គម ធានារ៉ាប់រង និងសេវាកម្ម',
    departmentId: 10,
    status: 'active',
    image: '/image/pic11.png',
    department: linkDept(10),
  },
  {
    id: 12,
    name: 'Dr. San Kimseang',
    nameKm: 'លោកវេជ្ជ.ឯកទេស សាន គឹមស៊ាង',
    specialty: 'Deputy Head of Anatomical Pathology and Mortuary Unit',
    specialtyKm: 'នាយរងផ្នែក អ៊ុុយនីតេកាយវិភាគរោគវិទ្យា និងជាលោកា',
    departmentId: 6,
    status: 'active',
    image: '/image/pic12.png',
    department: linkDept(6),
  },
];

// Attach a doctor count to each department for the Departments page badge.
for (const dept of departments) {
  dept._count = { doctors: doctors.filter((doc) => doc.departmentId === dept.id).length };
}

export const partnerships: Partnership[] = [
  {
    id: 1,
    name: 'International Atomic Energy Agency (IAEA)',
    nameKm: 'ភ្នាក់ងារថាមពលបរមាណូអន្តរជាតិ (IAEA)',
    type: 'UN Agency',
    country: 'International',
    icon: '⚛️',
    description:
      'IAEA KAM6005 technical cooperation project for 2024-2027, supporting radiotherapy services and medical physics capacity.',
    descKm: 'កិច្ចសហការបំពាក់ឧបករណ៍ចាំងរស្មី ផ្ទេរបច្ចេកវិទ្យា និងបណ្តុះបណ្តាលធនធានមនុស្ស។',
    image: '/images/partnerships/international/IAEA-logo.jpg',
  },
  {
    id: 2,
    name: 'Physicien Medical Sans Frontières',
    type: 'Medical Organization',
    country: 'International',
    icon: '🩺',
    description:
      'International medical physics collaboration supporting specialist knowledge exchange and cancer care.',
    image: '/images/partnerships/international/Physicien Medical.png',
  },
  {
    id: 3,
    name: 'Australian Aid: Australian Volunteer Program (AVI)',
    type: 'Volunteer Program',
    country: 'Australia',
    icon: '🇦🇺',
    description:
      'Australian volunteer program supporting healthcare training, hospital services, and professional development.',
    image: '/images/partnerships/international/avi-logo.jpg',
  },
  {
    id: 4,
    name: 'The Association of the Church of Jesus Christ of Latter-Day Saints (Donation)',
    type: 'Donation',
    country: 'International',
    icon: '🤝',
    description: 'Donation partnership supporting hospital services and patient care.',
    image: '/images/partnerships/international/donation-logo.jpg',
  },
  {
    id: 5,
    name: 'Institut de Cancérologie de Strasbourg',
    type: 'Cancer Institute',
    country: 'France',
    icon: '🏥',
    description:
      'International cancer care and medical collaboration with Institut de Cancérologie de Strasbourg.',
    image: '/images/partnerships/international/icans-logo.jpg',
  },
  {
    id: 6,
    name: 'Institut Paoli-Calmettes Unicancer Marseille',
    type: 'Cancer Institute',
    country: 'France',
    icon: '🏥',
    description:
      'Cancer care and professional collaboration with Institut Paoli-Calmettes, Unicancer Marseille.',
    image: '/images/partnerships/international/IPC-logo.jpg',
  },
  {
    id: 7,
    name: 'Korean University Anam Hospital',
    type: 'Hospital',
    country: 'South Korea',
    icon: '🏥',
    description: 'Clinical exchange program, surgical consultation, and advanced telemedicine support.',
    image: '/images/partnerships/international/Korean University Anam Hospital.png',
  },
  {
    id: 8,
    name: 'Yunan Cancer Hospital (The Third Affiliated Hospital of Kunming Medical University)',
    type: 'Cancer Hospital',
    country: 'China',
    icon: '🏥',
    description:
      'Cancer care and clinical collaboration with the Third Affiliated Hospital of Kunming Medical University.',
    image: '/images/partnerships/international/Yunan Cancer Hospital.jpg',
  },
  {
    id: 9,
    name: 'Norkot Tep Organization',
    nameKm: 'អង្គការណុកឃ្លាតេស',
    type: 'Organization',
    country: 'Cambodia',
    icon: '🤝',
    description:
      'Community health and social development partnership supporting outreach, education, and patient support initiatives.',
    descKm: 'កិច្ចសហការសុខភាពសង្គម និងអភិវឌ្ឍន៍សង្គមក្នុងការគាំទ្រ សាធារណៈ និងការថែទាំអ្នកជំងឺ។',
    image: '/images/partnerships/national/Nokor Tep Organization.png',
  },
  {
    id: 10,
    name: 'University of Health Sciences (UHS)',
    nameKm: 'សាកលវិទ្យាល័យវិទ្យាសាស្ត្រសុខាភិបាល',
    type: 'Academic',
    country: 'Cambodia',
    icon: '🎓',
    description:
      'Primary teaching hospital affiliation for medical students, clinical residents, and post-graduate specialists.',
    descKm: 'មន្ទីរពេទ្យបង្អែកសម្រាប់និស្សិតវេជ្ជសាស្ត្រ និងគ្រូពេទ្យកម្មសិក្សា។',
    image: '/images/partnerships/national/UHS_Cambodia_logo.png',
  },
  {
    id: 11,
    name: 'International University',
    nameKm: 'សាកលវិទ្យាល័យអន្តរជាតិ',
    type: 'Academic',
    country: 'Cambodia',
    icon: '🎓',
    description:
      'Academic collaboration for healthcare training, clinical mentoring, and interprofessional education programs.',
    descKm: 'កិច្ចសហការបណ្តុះបណ្តាលសុខាភិបាល និងការបណ្តុះបណ្តាលដោយគ្រូពេទ្យដែលមានបទពិសោធន៍។',
    image: '/images/partnerships/national/mou_iu.png',
  },
  {
    id: 12,
    name: 'Health Science Institute of RCAF',
    nameKm: 'វិទ្យាស្ថានវិទ្យាសាស្ត្រសុខាភិបាលនៃកងទ័ពជើងខ្មែរ',
    type: 'Academic',
    country: 'Cambodia',
    icon: '🩺',
    description:
      'Training and professional development partnership for military-related health services and public health capacity building.',
    descKm: 'កិច្ចសហការបណ្តុះបណ្តាល និងសាកលវិទ្យាល័យសម្រាប់សេវាសុខាភិបាល និងសុខភាពសាធារណៈ។',
    image: '/images/partnerships/national/Health Science Institute.png',
  },
  {
    id: 13,
    name: 'University of Puthisastra',
    nameKm: 'សាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ',
    type: 'Academic',
    country: 'Cambodia',
    icon: '🎓',
    description:
      'Medical and health sciences educational collaboration focused on service learning and clinical practice development.',
    descKm: 'កិច្ចសហការសម្រាប់ការអប់រំវេជ្ជសាស្ត្រ និងការអនុវត្តគ្លីនិកក្នុងការអប់រំសុខភាព។',
    image: '/images/partnerships/national/University of Puthisastra.jpg',
  },
  {
    id: 14,
    name: 'CamTech University',
    nameKm: 'សាកលវិទ្យាល័យ CamTech',
    type: 'Academic',
    country: 'Cambodia',
    icon: '🎓',
    description:
      'Technology-enabled healthcare education and applied research collaboration for future medical professionals.',
    descKm: 'កិច្ចសហការសម្រាប់ការអប់រំ និងស្រាវជ្រាវវិទ្យាសាស្ត្រ សម្រាប់អ្នកជំនាញថែទាំសុខភាព។',
    image: '/images/partnerships/national/CamTech University.jpg',
  },
];
