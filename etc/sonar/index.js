import { name, version } from '../../package.json'
import scan from 'sonarqube-scanner'

const serverUrl = 'http://localhost:9000'
const src = 'client, shared'
const timeout = '120'

const options = {
  'sonar.ws.timeout': timeout,
  'sonar.projectName': name,
  'sonar.projectVersion': version,

  'sonar.sources': src,
  'sonar.sourceEncoding': 'UTF-8'

  // 'sonar.branch.name':'z',
  // 'sonar.projectDescription': '',
}

scan({ serverUrl, options }, process.exit)
