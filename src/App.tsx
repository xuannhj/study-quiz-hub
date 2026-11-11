import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardView } from './features/dashboard/DashboardView';
import { SubjectHubView } from './features/subject-detail/SubjectHubView';
import { StudyChapterView } from './features/study/StudyChapterView';
import { ExamRunnerView } from './features/exam/ExamRunnerView';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
          <Route
            path="/subjects/:subjectId/study/:chapterId"
            element={<StudyChapterView />}
          />
          <Route
            path="/subjects/:subjectId/exam"
            element={<ExamRunnerView />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
