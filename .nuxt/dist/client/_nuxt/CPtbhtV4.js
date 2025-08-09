import{_ as V}from"./Cs0ylA1V.js";import{_ as z}from"./DvdQIjAm.js";import{_ as U,r as _,c as v,o as r,a as t,m as D,q as y,t as g,l as o,s as A,v as I,d as f,p as x,x as G,u as W,i as H,e as K,j as Q,b as e,F as T,k as O,f as l,y as Y,n as B,z as X}from"./CqSJX0oL.js";import"./BY4wecBf.js";const J={class:"code-block-container"},Z={class:"code-summary"},aa={class:"summary-content"},ta={class:"code-title"},sa={key:0,class:"code-description"},ea={class:"code-info"},ia={class:"language-tag"},da={key:0,class:"complexity-tag"},la={class:"code-content-wrapper"},ca={class:"code-header"},oa={class:"file-name"},na={class:"code-actions"},ra=["href"],va={class:"code-content"},pa={class:"code-pre"},fa={__name:"CodeBlock",props:{title:{type:String,required:!0},description:{type:String,default:""},code:{type:String,required:!0},language:{type:String,default:"text"},fileName:{type:String,default:""},complexity:{type:String,default:""},githubUrl:{type:String,default:""}},setup(b){const m=b,u=_(!1),c=_(!1),j=()=>{u.value=!u.value},M=async()=>{try{await navigator.clipboard.writeText(m.code),c.value=!0,setTimeout(()=>{c.value=!1},2e3)}catch(L){console.error("复制失败:",L)}};return(L,C)=>(r(),v("div",J,[t("div",Z,[t("div",aa,[t("h4",ta,g(b.title),1),b.description?(r(),v("p",sa,g(b.description),1)):y("",!0),t("div",ea,[t("span",ia,g(b.language),1),b.complexity?(r(),v("span",da,g(b.complexity),1)):y("",!0)])]),t("button",{onClick:j,class:o(["code-toggle-btn",{expanded:A(u)}])},[t("span",null,g(A(u)?"收起代码":"查看代码"),1),(r(),v("svg",{class:o(["toggle-icon",{rotated:A(u)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},C[0]||(C[0]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2)]),D(t("div",la,[t("div",ca,[t("span",oa,g(b.fileName||"code."+b.language),1),t("div",na,[t("button",{onClick:M,class:o(["copy-btn",{copied:A(c)}])},g(A(c)?"已复制":"复制"),3),b.githubUrl?(r(),v("a",{key:0,href:b.githubUrl,target:"_blank",class:"github-btn"},C[1]||(C[1]=[t("svg",{class:"github-icon",fill:"currentColor",viewBox:"0 0 24 24"},[t("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),f(" GitHub ",-1)]),8,ra)):y("",!0)])]),t("div",va,[t("pre",pa,[t("code",{class:o(`language-${b.language}`)},g(b.code),3)])])],512),[[I,A(u)]])]))}},ma=U(fa,[["__scopeId","data-v-e3db92c8"]]),ga=x("/images/projects/yigui-app-2025/App截图/设计页3_设计结果展示.PNG"),ua=x("/videos/projects/yigui-app-2025/在模拟机完整操作视频.webm"),F=x("/images/projects/mengsheng-2024/cover.jpg"),ha=x("/images/projects/mengsheng-2024/外框架3D建模展示.mp4"),ya=x("/images/projects/mengsheng-2024/debug-video-1.mp4"),ba=x("/images/projects/mengsheng-2024/debug-video-2.mp4"),ka=x("/images/projects/led-voice-2025/vid-poster.png"),wa=x("/images/projects/led-voice-2025/demo-video.mp4"),_a=x("/images/projects/restaurant-system-2025/首页_导航栏展开.png"),xa=x("/images/projects/restaurant-system-2025/restaurant-system-demo.mp4"),ja={class:"projects-page"},Ca={class:"main-content"},Sa={key:0,class:"projects-overview"},Aa={class:"category-selector"},Da={class:"category-buttons"},Ia={key:0,class:"projects-grid"},Ma=["onClick"],La={class:"card-image"},Pa={key:1,class:"placeholder-image"},Ra={class:"placeholder-icon"},Ta={class:"placeholder-text"},Oa={class:"card-overlay"},Fa={class:"view-details"},Ea={class:"card-content"},Ba={class:"card-header"},Ua={class:"card-title"},Na={class:"card-year"},$a={class:"card-description"},qa={class:"card-badges"},Va={key:0,class:"card-stats"},za={class:"stat-value"},Ga={class:"stat-label"},Wa={key:1,class:"card-status"},Ha={key:1,class:"empty-state"},Ka={class:"empty-title"},Qa={key:1,class:"project-detail"},Ya={class:"floating-nav"},Xa={class:"floating-nav-content"},Ja={class:"floating-nav-items"},Za={id:"project-background",class:"section"},at={class:"background-content"},tt={class:"background-main-content"},st={class:"research-analysis"},et={class:"analysis-grid"},it={class:"analysis-card"},dt={class:"analysis-card"},lt={id:"ui-design",class:"section"},ct={class:"ui-design-content"},ot={class:"ui-main-content"},nt={class:"ui-description"},rt={class:"figma-showcase"},vt={class:"figma-image-container"},pt={class:"app-screenshots-showcase mt-12"},ft={class:"screenshots-grid"},mt={id:"model-assets",class:"section"},gt={class:"work-content space-y-10"},ut={class:"blender-showcase"},ht={class:"blender-gallery-grid"},yt={id:"system-architecture",class:"section"},bt={class:"work-content space-y-10"},kt={class:"architecture-showcase"},wt={class:"architecture-image-container"},_t={id:"algorithm-ai",class:"section"},xt={class:"algorithm-content"},jt={class:"algorithm-main-content"},Ct={id:"model-assets",class:"section"},St={class:"work-content space-y-10"},At={class:"model-process-grid grid grid-cols-1 md:grid-cols-2 gap-8"},Dt={class:"model-process-item"},It={class:"model-item-image mb-4"},Mt={class:"model-process-item"},Lt={class:"model-item-image mb-4"},Pt={class:"model-process-item"},Rt={class:"model-item-image mb-4"},Tt={class:"model-process-item"},Ot={class:"model-item-image mb-4"},Ft={id:"system-architecture",class:"section"},Et={class:"work-content space-y-10"},Bt={class:"architecture-showcase"},Ut={class:"architecture-image-container"},Nt={class:"algorithm-implementations"},$t={id:"algorithm-ml",class:"section"},qt={class:"work-content space-y-10"},Vt={class:"algorithm-showcase"},zt={class:"algorithm-image-container"},Gt={class:"parametric-showcase"},Wt={class:"parametric-image-container"},Ht={id:"achievements",class:"section"},Kt={class:"work-content space-y-8"},Qt={class:"certificate-showcase"},Yt={class:"certificate-container"},Xt={key:2,class:"project-detail"},Jt={class:"floating-nav"},Zt={class:"floating-nav-content"},as={class:"floating-nav-items"},ts={class:"hero-section"},ss={class:"hero-content"},es={id:"team-work",class:"section"},is={class:"work-content"},ds={class:"work-gallery"},ls={class:"team-gallery-layout"},cs={class:"prototype-section"},os={class:"screenshots-section"},ns={id:"individual-work",class:"section"},rs={class:"work-content"},vs={class:"work-gallery"},ps={class:"individual-gallery-grid"},fs={id:"achievements",class:"section"},ms={class:"achievements-content"},gs={class:"achievement-summary"},us={class:"result-item"},hs={class:"award-image-container"},ys={key:0,href:"/images/projects/nus-sws-2024/Top Project.png",target:"_blank",download:"NUS-SWS-2024-团队荣誉证书.png",class:"download-button"},bs={class:"result-item"},ks={class:"award-image-container"},ws={key:0,href:"/images/projects/nus-sws-2024/个人A+.png",target:"_blank",download:"NUS-SWS-2024-个人成绩证书.png",class:"download-button"},_s={id:"project-summary",class:"project-summary-section"},xs={class:"summary-content-wrapper"},js={class:"project-photos"},Cs={key:3,class:"project-detail"},Ss={class:"floating-nav"},As={class:"floating-nav-content"},Ds={class:"floating-nav-items"},Is={class:"hero-section"},Ms={class:"hero-content"},Ls={id:"project-background",class:"section"},Ps={class:"background-content"},Rs={class:"measurement-area-section"},Ts={class:"area-diagram-container"},Os={id:"system-design",class:"section"},Fs={class:"work-content"},Es={class:"work-gallery"},Bs={id:"software-algorithm",class:"section"},Us={class:"algorithm-content"},Ns={class:"python-analysis-results"},$s={class:"analysis-result-image"},qs={class:"simulation-results"},Vs={class:"simulation-gallery"},zs={class:"asr-code-diagram"},Gs={class:"diagram-image"},Ws={id:"hardware-implementation",class:"section"},Hs={class:"hardware-content"},Ks={class:"hardware-section"},Qs={class:"hardware-layout left-image"},Ys={class:"hardware-image-container"},Xs={class:"hardware-section"},Js={class:"hardware-layout right-image"},Zs={class:"hardware-image-container"},ae={class:"hardware-section"},te={class:"hardware-layout left-image"},se={class:"hardware-image-container"},ee={class:"hardware-section"},ie={class:"mic-array-layout"},de={class:"hardware-section"},le={class:"system-gallery"},ce={id:"testing-results",class:"section"},oe={class:"testing-content"},ne={class:"competition-results"},re={class:"result-center"},ve={class:"award-image-container"},pe={key:0,href:"/images/projects/mengsheng-2024/award-certificate.pdf",target:"_blank",download:"盟升杯三等奖证书.pdf",class:"download-button"},fe={id:"project-summary",class:"project-summary-section"},me={class:"summary-content-wrapper"},ge={class:"project-photos"},ue={key:4,class:"project-detail"},he={class:"floating-nav"},ye={class:"floating-nav-content"},be={class:"floating-nav-items"},ke={class:"hero-section"},we={class:"hero-content"},_e={id:"hardware-design",class:"section"},xe={class:"hardware-content"},je={class:"architecture-section"},Ce={class:"architecture-layout"},Se={class:"hardware-modules"},Ae={class:"modules-gallery"},De={class:"final-product"},Ie={class:"product-layout"},Me={id:"led-software-design",class:"section"},Le={class:"led-software-content"},Pe={class:"led-code-section"},Re={class:"led-code-section"},Te={id:"led-extended-thinking",class:"section"},Oe={class:"led-thinking-content"},Fe={class:"evolution-part"},Ee={class:"evolution-content"},Be={class:"breakthrough-section"},Ue={class:"spectrogram-showcase"},Ne={class:"evolution-part"},$e={class:"evolution-content"},qe={class:"solution-section"},Ve={class:"tinyml-showcase"},ze={class:"evolution-part"},Ge={class:"evolution-content"},We={class:"generative-art"},He={class:"art-concept"},Ke={class:"art-layout"},Qe={class:"dataset-showcase"},Ye={id:"led-achievements",class:"section"},Xe={class:"led-achievements-content"},Je={class:"achievements-showcase"},Ze={class:"grade-certificate"},ai={key:5,class:"project-detail"},ti={class:"floating-nav"},si={class:"floating-nav-content"},ei={class:"floating-nav-items"},ii={class:"hero-section"},di={class:"hero-content"},li={id:"restaurant-features",class:"section"},ci={class:"restaurant-features-content"},oi={class:"feature-showcase"},ni={class:"feature-images"},ri={class:"feature-showcase reverse"},vi={class:"feature-images"},pi={class:"feature-showcase"},fi={class:"feature-images"},mi={class:"feature-showcase reverse"},gi={class:"feature-images"},ui={class:"feature-showcase-vertical"},hi={class:"feature-images-dual"},yi={class:"feature-showcase-vertical"},bi={class:"feature-images-dual"},ki={class:"feature-showcase-vertical"},wi={class:"feature-images-dual"},_i={key:6,class:"project-detail"},xi={class:"modal-title"},ji=`close all

% 参数设置
a = 40; % 麦克风阵列的长度（厘米）
b = 20; % 麦克风阵列的宽度（厘米）
fs = 20000; % 采样率
c = 343; % 声速（米/秒）
t = 0:1/fs:1; % 时间轴，信号时长1秒

% 麦克风阵列位置(原代位置取麦克风阵列的中心点）
mic_positions = [-a/2, -b/2;      % 麦克风1
                 a/2, -b/2;       % 麦克风2
                 -a/2, b/2;       % 麦克风3
                 a/2, b/2];       % 麦克风4

% 五个已知区域中心的声源坐标
source_positions = [0, 240;  % A区域
                    -50, 240; % B区域
                    -100, 240; % C区域
                    50, 240; % D区域
                    100, 240]; % E区域

% 从每个麦克风到声源的距离
distances = sqrt(sum((mic_positions - source_position).^2, 2));

% 模拟信号传播延时
delays = distances / c; % 根据距离计算传播延迟
signals = zeros(length(t), 4);
source_signal = sin(2 * pi * 1000 * t); % 生成一个1kHz的测试信号

% 计算TDOA
tdoa = zeros(1, 3); % TDOA between microphone pairs
tdoa(1) = delays(2) - delays(1); % Mic2-Mic1
tdoa(2) = delays(3) - delays(1); % Mic3-Mic1
tdoa(3) = delays(4) - delays(1); % Mic4-Mic1

% 使用最小化误差的优化方法估计声源位置
objective_func = @(pos) sum((sqrt(sum((mic_positions(2:end, :) - pos).^2, 2)) - sqrt(sum((mic_positions(1, :) - pos).^2)) - tdoa' * c).^2);

% 使用fminsearch进行优化，初始位置opoint为(0, 0)
opoint = [0, 0];
estimated_position = fminsearch(objective_func, opoint);`,Ci=`#include "asr.h"

extern "C"{ void * __dso_handle = 0 ;}

#include "setup.h"
#include "myLib/asr_event.h"
#include "HardwareSerial.h"

uint32_t snid;

void ASR_CODE();

/*描述该功能...*/
void ASR_CODE(){
  switch (snid) {
    case 1:
     digitalWrite(4,0);
     Serial.print("11");
     break;
    case 2:
     digitalWrite(4,1);
     Serial.print("22");
     break;
    case 3:
     digitalWrite(2,0);
     Serial.print("33");
     break;
    case 4:
     digitalWrite(2,1);
     Serial.print("44");
     break;
  }
}

void hardware_init(){
  setPinFun(13,SECOND_FUNCTION);
  setPinFun(14,SECOND_FUNCTION);
  Serial.begin(9600);
  vTaskDelete(NULL);
}

void setup()
{
  set_wakeup_forever();

  //{ID:1,keyword:"命令词",ASR:"打开灯光",ASRTO:""}
  //{ID:2,keyword:"命令词",ASR:"关闭灯光",ASRTO:""}
  //{ID:3,keyword:"命令词",ASR:"打开空调",ASRTO:""}
  //{ID:4,keyword:"命令词",ASR:"关闭空调",ASRTO:""}

  setPinFun(4,FIRST_FUNCTION);
  pinMode(4,output);
  setPinFun(4,FIRST_FUNCTION);
}`,Si=`import librosa
import numpy as np
import matplotlib.pyplot as plt

# 加载 mp3文件
audio_file = '4.mp3'  #1, 2, 3, 4分别为打开/关闭灯光，打开/关闭空调
y, sr = librosa.load(audio_file, sr=None)

# 绘制波形
plt.figure(figsize=(10, 6))
plt.plot(np.linspace(0, len(y) / sr, len(y)), y)
plt.title("guan bi kong tiao 2m ")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.show()

# 计算信号的 RMS（Root Mean Square）值作为信号强度
rms = librosa.feature.rms(y=y)
print(f"RMS value: {np.mean(rms)}")`,Ai=`import Foundation
import UIKit
import CoreML
import Vision
import Combine

class ImageProcessingManager: ObservableObject {
    @Published var processedImage: UIImage?
    @Published var isProcessing = false
    @Published var processingProgress: Double = 0.0

    private let apiService = APIService()
    private var cancellables = Set<AnyCancellable>()

    // MARK: - 图像预处理
    func preprocessImage(_ image: UIImage) -> UIImage? {
        guard let ciImage = CIImage(image: image) else { return nil }

        let context = CIContext()

        // 图像尺寸标准化
        let targetSize = CGSize(width: 512, height: 512)
        let filter = CIFilter(name: "CILanczosScaleTransform")

        let scale = min(targetSize.width / ciImage.extent.width,
                       targetSize.height / ciImage.extent.height)

        filter?.setValue(ciImage, forKey: kCIInputImageKey)
        filter?.setValue(scale, forKey: kCIInputScaleKey)
        filter?.setValue(1.0, forKey: kCIInputAspectRatioKey)

        guard let outputImage = filter?.outputImage,
              let cgImage = context.createCGImage(outputImage, from: outputImage.extent) else {
            return nil
        }

        return UIImage(cgImage: cgImage)
    }

    // MARK: - 虚拟试穿处理
    func processVirtualTryOn(userImage: UIImage, clothingDesign: ClothingDesign) {
        isProcessing = true
        processingProgress = 0.0

        // 图像预处理
        guard let processedUserImage = preprocessImage(userImage) else {
            handleProcessingError("图像预处理失败")
            return
        }

        // 创建处理请求
        let request = VirtualTryOnRequest(
            userImage: processedUserImage,
            clothingType: clothingDesign.type,
            style: clothingDesign.style,
            colors: clothingDesign.colors
        )

        // 发送到后端处理
        apiService.submitVirtualTryOnRequest(request)
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isProcessing = false
                    if case .failure(let error) = completion {
                        self?.handleProcessingError(error.localizedDescription)
                    }
                },
                receiveValue: { [weak self] response in
                    self?.processedImage = response.resultImage
                    self?.processingProgress = 1.0
                }
            )
            .store(in: &cancellables)
    }

    private func handleProcessingError(_ message: String) {
        print("Processing error: \\(message)")
        isProcessing = false
        processingProgress = 0.0
    }
}`,Di=`import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
import mediapipe as mp
from PIL import Image
import torch
import torchvision.transforms as transforms

class VirtualTryOnProcessor:
    def __init__(self):
        # 初始化模型
        self.pose_detector = mp.solutions.pose.Pose(
            static_image_mode=True,
            model_complexity=2,
            enable_segmentation=True,
            min_detection_confidence=0.5
        )

        # 加载预训练的试衣模型
        self.tryon_model = load_model('models/virtual_tryon_model.h5')
        self.clothing_segmentation_model = load_model('models/cloth_segmentation.h5')

    def detect_human_pose(self, image):
        """检测人体关键点和姿态"""
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = self.pose_detector.process(rgb_image)

        if not results.pose_landmarks:
            raise ValueError("未检测到人体姿态")

        # 提取关键点坐标
        landmarks = []
        for landmark in results.pose_landmarks.landmark:
            landmarks.append([landmark.x, landmark.y, landmark.z])

        return np.array(landmarks), results.segmentation_mask

    def segment_clothing_area(self, image, pose_landmarks):
        """分割服装区域"""
        # 预处理图像
        processed_image = cv2.resize(image, (256, 256))
        processed_image = processed_image.astype(np.float32) / 255.0

        # 使用U-Net进行服装分割
        input_tensor = np.expand_dims(processed_image, axis=0)
        segmentation_mask = self.clothing_segmentation_model.predict(input_tensor)

        # 后处理分割结果
        mask = segmentation_mask[0, :, :, 0]
        mask = (mask > 0.5).astype(np.uint8)

        return mask

    def generate_virtual_tryon(self, user_image, clothing_design, pose_landmarks, clothing_mask):
        """生成虚拟试穿效果"""
        try:
            # 图像预处理
            user_img_resized = cv2.resize(user_image, (256, 256))

            # 服装设计参数编码
            style_encoding = self.encode_clothing_style(clothing_design)

            # 准备模型输入
            model_input = {
                'user_image': np.expand_dims(user_img_resized, axis=0),
                'pose_landmarks': np.expand_dims(pose_landmarks, axis=0),
                'clothing_mask': np.expand_dims(clothing_mask, axis=0),
                'style_encoding': np.expand_dims(style_encoding, axis=0)
            }

            # 模型推理
            generated_result = self.tryon_model.predict(model_input)

            # 后处理生成结果
            result_image = self.postprocess_result(generated_result[0])

            return result_image

        except Exception as e:
            print(f"虚拟试穿生成失败: {e}")
            return None

    def encode_clothing_style(self, clothing_design):
        """编码服装设计参数"""
        # 将设计参数转换为模型可理解的向量
        style_vector = np.zeros(128)  # 128维特征向量

        # 服装类型编码
        type_mapping = {'t-shirt': 0, 'dress': 1, 'jacket': 2, 'pants': 3}
        style_vector[type_mapping.get(clothing_design['type'], 0)] = 1.0

        # 颜色编码 (RGB归一化)
        colors = clothing_design.get('colors', [[255, 255, 255]])
        for i, color in enumerate(colors[:3]):  # 最多支持3种颜色
            style_vector[10 + i*3:10 + (i+1)*3] = np.array(color) / 255.0

        # 风格编码
        style_mapping = {'casual': 20, 'formal': 21, 'vintage': 22, 'modern': 23}
        style_idx = style_mapping.get(clothing_design.get('style', 'casual'), 20)
        style_vector[style_idx] = 1.0

        return style_vector

    def postprocess_result(self, generated_image):
        """后处理生成的图像"""
        # 反归一化
        result = generated_image * 255.0
        result = np.clip(result, 0, 255).astype(np.uint8)

        # 图像增强
        result = cv2.bilateralFilter(result, 9, 75, 75)

        return result

    def process_request(self, user_image_path, clothing_design):
        """处理完整的虚拟试穿请求"""
        # 加载用户图像
        user_image = cv2.imread(user_image_path)
        if user_image is None:
            raise ValueError("无法加载用户图像")

        # 人体姿态检测
        pose_landmarks, segmentation_mask = self.detect_human_pose(user_image)

        # 服装区域分割
        clothing_mask = self.segment_clothing_area(user_image, pose_landmarks)

        # 生成虚拟试穿效果
        result_image = self.generate_virtual_tryon(
            user_image, clothing_design, pose_landmarks, clothing_mask
        )

        return result_image

# 使用示例
if __name__ == "__main__":
    processor = VirtualTryOnProcessor()

    clothing_design = {
        'type': 't-shirt',
        'style': 'casual',
        'colors': [[255, 100, 100], [255, 255, 255]],
        'patterns': ['solid']
    }

    result = processor.process_request('user_photo.jpg', clothing_design)
    cv2.imwrite('virtual_tryon_result.jpg', result)`,Ii=`import Metal
import MetalKit
import simd

class ModelRenderingEngine: NSObject, MTKViewDelegate {
    private var device: MTLDevice!
    private var commandQueue: MTLCommandQueue!
    private var renderPipelineState: MTLRenderPipelineState!
    private var uniformBuffer: MTLBuffer!
    private var meshes: [MTKMesh] = []

    // MARK: - 渲染引擎初始化
    init(device: MTLDevice) {
        self.device = device
        super.init()

        setupCommandQueue()
        setupRenderPipeline()
        setupUniformBuffers()
    }

    private func setupCommandQueue() {
        commandQueue = device.makeCommandQueue()
    }

    private func setupRenderPipeline() {
        guard let library = device.makeDefaultLibrary() else {
            fatalError("Failed to create Metal library")
        }

        let vertexFunction = library.makeFunction(name: "vertexShader")
        let fragmentFunction = library.makeFunction(name: "fragmentShader")

        let pipelineDescriptor = MTLRenderPipelineDescriptor()
        pipelineDescriptor.vertexFunction = vertexFunction
        pipelineDescriptor.fragmentFunction = fragmentFunction
        pipelineDescriptor.colorAttachments[0].pixelFormat = .bgra8Unorm
        pipelineDescriptor.depthAttachmentPixelFormat = .depth32Float

        // 启用混合模式
        pipelineDescriptor.colorAttachments[0].isBlendingEnabled = true
        pipelineDescriptor.colorAttachments[0].rgbBlendOperation = .add
        pipelineDescriptor.colorAttachments[0].alphaBlendOperation = .add

        do {
            renderPipelineState = try device.makeRenderPipelineState(descriptor: pipelineDescriptor)
        } catch {
            fatalError("Failed to create render pipeline state: \\(error)")
        }
    }

    private func setupUniformBuffers() {
        uniformBuffer = device.makeBuffer(length: MemoryLayout<Uniforms>.stride * 3,
                                         options: .storageModeShared)
    }

    // MARK: - 3D模型加载与渲染
    func loadModel(from url: URL) throws {
        let asset = MDLAsset(url: url)
        let meshes = try MTKMesh.newMeshes(asset: asset, device: device)
        self.meshes = meshes.metalKitMeshes
    }

    func draw(in view: MTKView) {
        guard let commandBuffer = commandQueue.makeCommandBuffer(),
              let renderPassDescriptor = view.currentRenderPassDescriptor,
              let renderEncoder = commandBuffer.makeRenderCommandEncoder(descriptor: renderPassDescriptor) else {
            return
        }

        // 设置渲染状态
        renderEncoder.setRenderPipelineState(renderPipelineState)

        // 更新uniform数据
        updateUniforms()
        renderEncoder.setVertexBuffer(uniformBuffer, offset: 0, index: 1)
        renderEncoder.setFragmentBuffer(uniformBuffer, offset: 0, index: 1)

        // 渲染所有网格
        for mesh in meshes {
            renderMesh(mesh, with: renderEncoder)
        }

        renderEncoder.endEncoding()

        if let drawable = view.currentDrawable {
            commandBuffer.present(drawable)
        }

        commandBuffer.commit()
    }

    private func renderMesh(_ mesh: MTKMesh, with encoder: MTLRenderCommandEncoder) {
        // 设置顶点缓冲区
        for (index, vertexBuffer) in mesh.vertexBuffers.enumerated() {
            encoder.setVertexBuffer(vertexBuffer.buffer,
                                  offset: vertexBuffer.offset,
                                  index: index)
        }

        // 渲染每个子网格
        for submesh in mesh.submeshes {
            encoder.drawIndexedPrimitives(type: submesh.primitiveType,
                                        indexCount: submesh.indexCount,
                                        indexType: submesh.indexType,
                                        indexBuffer: submesh.indexBuffer.buffer,
                                        indexBufferOffset: submesh.indexBuffer.offset)
        }
    }

    private func updateUniforms() {
        let uniforms = uniformBuffer.contents().bindMemory(to: Uniforms.self, capacity: 1)

        // 设置模型-视图-投影矩阵
        uniforms.pointee.modelViewProjectionMatrix = getModelViewProjectionMatrix()
        uniforms.pointee.normalMatrix = getNormalMatrix()
        uniforms.pointee.lightPosition = simd_float3(0, 5, 5)
        uniforms.pointee.viewPosition = simd_float3(0, 0, 5)
    }

    // MARK: - 矩阵计算
    private func getModelViewProjectionMatrix() -> simd_float4x4 {
        let model = matrix_identity_float4x4
        let view = matrix_look_at_left_hand(eye: simd_float3(0, 0, 5),
                                           center: simd_float3(0, 0, 0),
                                           up: simd_float3(0, 1, 0))
        let projection = matrix_perspective_left_hand(fovyRadians: Float.pi / 4,
                                                    aspectRatio: 1.0,
                                                    nearZ: 0.1,
                                                    farZ: 100.0)

        return projection * view * model
    }

    private func getNormalMatrix() -> simd_float3x3 {
        let modelMatrix = matrix_identity_float4x4
        let normalMatrix = simd_float3x3(modelMatrix.columns.0.xyz,
                                       modelMatrix.columns.1.xyz,
                                       modelMatrix.columns.2.xyz)
        return matrix_transpose(matrix_invert(normalMatrix))
    }
}

// Uniform结构体
struct Uniforms {
    var modelViewProjectionMatrix: simd_float4x4
    var normalMatrix: simd_float3x3
    var lightPosition: simd_float3
    var viewPosition: simd_float3
}

// 扩展SIMD向量
extension simd_float4 {
    var xyz: simd_float3 {
        return simd_float3(x, y, z)
    }
}`,Mi=`import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
import json
from datetime import datetime, timedelta

class RecommendationEngine:
    def __init__(self):
        self.user_item_matrix = None
        self.item_features_matrix = None
        self.svd_model = TruncatedSVD(n_components=50, random_state=42)
        self.tfidf_vectorizer = TfidfVectorizer(max_features=1000)
        self.user_profiles = {}
        self.item_profiles = {}

    def load_data(self, interactions_df, items_df):
        """加载用户交互数据和物品特征数据"""
        self.interactions_df = interactions_df
        self.items_df = items_df

        # 构建用户-物品交互矩阵
        self.user_item_matrix = self.build_user_item_matrix()

        # 构建物品特征矩阵
        self.item_features_matrix = self.build_item_features_matrix()

        # 训练协同过滤模型
        self.train_collaborative_filtering()

    def build_user_item_matrix(self):
        """构建用户-物品评分矩阵"""
        return self.interactions_df.pivot_table(
            index='user_id',
            columns='item_id',
            values='rating',
            fill_value=0
        )

    def build_item_features_matrix(self):
        """构建物品特征矩阵"""
        # 合并服装属性为文本描述
        item_descriptions = []
        for _, item in self.items_df.iterrows():
            description = f"{item['category']} {item['style']} {item['color']} {item['material']}"
            item_descriptions.append(description)

        # 使用TF-IDF向量化
        features_matrix = self.tfidf_vectorizer.fit_transform(item_descriptions)
        return features_matrix.toarray()

    def train_collaborative_filtering(self):
        """训练协同过滤模型"""
        # 使用SVD进行矩阵分解
        self.svd_model.fit(self.user_item_matrix)

        # 计算用户和物品的潜在特征
        self.user_factors = self.svd_model.transform(self.user_item_matrix)
        self.item_factors = self.svd_model.components_.T

    def get_collaborative_recommendations(self, user_id, n_recommendations=10):
        """基于协同过滤的推荐"""
        if user_id not in self.user_item_matrix.index:
            return self.get_popular_items(n_recommendations)

        user_idx = self.user_item_matrix.index.get_loc(user_id)
        user_vector = self.user_factors[user_idx].reshape(1, -1)

        # 计算用户与所有物品的相似度
        item_scores = np.dot(user_vector, self.item_factors.T).flatten()

        # 获取用户已交互的物品
        interacted_items = set(self.user_item_matrix.columns[
            self.user_item_matrix.iloc[user_idx] > 0
        ])

        # 生成推荐列表（排除已交互物品）
        recommendations = []
        item_score_pairs = list(zip(self.user_item_matrix.columns, item_scores))
        item_score_pairs.sort(key=lambda x: x[1], reverse=True)

        for item_id, score in item_score_pairs:
            if item_id not in interacted_items:
                recommendations.append({
                    'item_id': item_id,
                    'score': float(score),
                    'reason': 'collaborative_filtering'
                })
                if len(recommendations) >= n_recommendations:
                    break

        return recommendations

    def get_content_based_recommendations(self, user_id, n_recommendations=10):
        """基于内容的推荐"""
        user_history = self.get_user_interaction_history(user_id)

        if not user_history:
            return self.get_popular_items(n_recommendations)

        # 计算用户喜好特征向量
        user_preference_vector = self.calculate_user_preference_vector(user_history)

        # 计算与所有物品的相似度
        item_similarities = cosine_similarity(
            user_preference_vector.reshape(1, -1),
            self.item_features_matrix
        ).flatten()

        # 生成推荐列表
        recommendations = []
        item_similarity_pairs = list(zip(self.items_df['item_id'], item_similarities))
        item_similarity_pairs.sort(key=lambda x: x[1], reverse=True)

        # 排除用户已交互的物品
        interacted_items = set(user_history['item_id'])

        for item_id, similarity in item_similarity_pairs:
            if item_id not in interacted_items:
                recommendations.append({
                    'item_id': item_id,
                    'score': float(similarity),
                    'reason': 'content_similarity'
                })
                if len(recommendations) >= n_recommendations:
                    break

        return recommendations

    def get_hybrid_recommendations(self, user_id, n_recommendations=10, alpha=0.7):
        """混合推荐算法"""
        # 获取协同过滤和基于内容的推荐
        cf_recs = self.get_collaborative_recommendations(user_id, n_recommendations * 2)
        cb_recs = self.get_content_based_recommendations(user_id, n_recommendations * 2)

        # 合并推荐结果
        combined_scores = {}

        # 协同过滤权重
        for rec in cf_recs:
            item_id = rec['item_id']
            combined_scores[item_id] = alpha * rec['score']

        # 基于内容权重
        for rec in cb_recs:
            item_id = rec['item_id']
            if item_id in combined_scores:
                combined_scores[item_id] += (1 - alpha) * rec['score']
            else:
                combined_scores[item_id] = (1 - alpha) * rec['score']

        # 排序并返回top-N推荐
        sorted_recommendations = sorted(
            combined_scores.items(),
            key=lambda x: x[1],
            reverse=True
        )[:n_recommendations]

        return [{
            'item_id': item_id,
            'score': float(score),
            'reason': 'hybrid_recommendation'
        } for item_id, score in sorted_recommendations]

    def calculate_user_preference_vector(self, user_history):
        """计算用户偏好向量"""
        user_items = user_history['item_id'].tolist()
        item_indices = [self.items_df[self.items_df['item_id'] == item_id].index[0]
                       for item_id in user_items if item_id in self.items_df['item_id'].values]

        if not item_indices:
            return np.zeros(self.item_features_matrix.shape[1])

        # 计算加权平均特征向量
        user_ratings = user_history['rating'].tolist()
        weighted_features = np.zeros(self.item_features_matrix.shape[1])

        for i, item_idx in enumerate(item_indices):
            weight = user_ratings[i] / 5.0  # 归一化评分
            weighted_features += weight * self.item_features_matrix[item_idx]

        return weighted_features / len(item_indices)

    def get_user_interaction_history(self, user_id):
        """获取用户交互历史"""
        return self.interactions_df[self.interactions_df['user_id'] == user_id]

    def get_popular_items(self, n_items=10):
        """获取热门物品（冷启动用）"""
        popular_items = self.interactions_df.groupby('item_id').agg({
            'rating': ['mean', 'count']
        }).flatten()

        # 计算热门度评分（评分均值 × log(评论数)）
        popularity_scores = []
        for item_id in self.items_df['item_id']:
            if item_id in popular_items.index:
                avg_rating = popular_items.loc[item_id, ('rating', 'mean')]
                rating_count = popular_items.loc[item_id, ('rating', 'count')]
                popularity = avg_rating * np.log(rating_count + 1)
            else:
                popularity = 0

            popularity_scores.append({
                'item_id': item_id,
                'score': popularity,
                'reason': 'popular_item'
            })

        return sorted(popularity_scores, key=lambda x: x['score'], reverse=True)[:n_items]

    def update_user_interaction(self, user_id, item_id, rating):
        """更新用户交互数据"""
        new_interaction = pd.DataFrame({
            'user_id': [user_id],
            'item_id': [item_id],
            'rating': [rating],
            'timestamp': [datetime.now()]
        })

        self.interactions_df = pd.concat([self.interactions_df, new_interaction],
                                       ignore_index=True)

        # 重新构建矩阵（在实际应用中可以增量更新）
        self.user_item_matrix = self.build_user_item_matrix()

# 使用示例
if __name__ == "__main__":
    # 初始化推荐引擎
    engine = RecommendationEngine()

    # 模拟数据加载
    interactions_data = pd.DataFrame({
        'user_id': [1, 1, 2, 2, 3],
        'item_id': ['item1', 'item2', 'item1', 'item3', 'item2'],
        'rating': [5, 4, 3, 5, 4],
        'timestamp': [datetime.now()] * 5
    })

    items_data = pd.DataFrame({
        'item_id': ['item1', 'item2', 'item3'],
        'category': ['t-shirt', 'dress', 'jacket'],
        'style': ['casual', 'formal', 'sporty'],
        'color': ['blue', 'red', 'black'],
        'material': ['cotton', 'silk', 'polyester']
    })

    engine.load_data(interactions_data, items_data)

    # 获取推荐
    recommendations = engine.get_hybrid_recommendations(user_id=1, n_recommendations=5)
    print("推荐结果:", recommendations)`,Li=`from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import base64
import io
import cv2
import numpy as np
from PIL import Image
import uuid
import os
from virtual_tryon import VirtualTryOnProcessor

app = Flask(__name__)
CORS(app)

# 初始化虚拟试穿处理器
tryon_processor = VirtualTryOnProcessor()

# 存储处理任务状态
task_status = {}

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    """处理图像上传请求"""
    try:
        # 获取上传的图像数据
        image_data = request.json.get('image')
        clothing_design = request.json.get('clothing_design')

        if not image_data or not clothing_design:
            return jsonify({'error': '缺少必要参数'}), 400

        # 解码base64图像
        image_bytes = base64.b64decode(image_data.split(',')[1])
        image = Image.open(io.BytesIO(image_bytes))

        # 转换为OpenCV格式
        opencv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

        # 生成任务ID
        task_id = str(uuid.uuid4())

        # 初始化任务状态
        task_status[task_id] = {
            'status': 'processing',
            'progress': 0,
            'result': None,
            'error': None
        }

        # 异步处理虚拟试穿
        process_virtual_tryon_async(task_id, opencv_image, clothing_design)

        return jsonify({
            'task_id': task_id,
            'status': 'submitted',
            'message': '图像上传成功，开始处理'
        })

    except Exception as e:
        return jsonify({'error': f'图像处理失败: {str(e)}'}), 500

@app.route('/api/task-status/<task_id>', methods=['GET'])
def get_task_status(task_id):
    """查询任务处理状态"""
    if task_id not in task_status:
        return jsonify({'error': '任务不存在'}), 404

    task = task_status[task_id]

    response = {
        'task_id': task_id,
        'status': task['status'],
        'progress': task['progress']
    }

    if task['status'] == 'completed' and task['result']:
        # 将结果图像编码为base64
        _, buffer = cv2.imencode('.jpg', task['result'])
        image_base64 = base64.b64encode(buffer).decode('utf-8')
        response['result_image'] = f"data:image/jpeg;base64,{image_base64}"

    if task['status'] == 'failed' and task['error']:
        response['error'] = task['error']

    return jsonify(response)

def process_virtual_tryon_async(task_id, user_image, clothing_design):
    """异步处理虚拟试穿任务"""
    import threading

    def process():
        try:
            # 更新处理进度
            task_status[task_id]['progress'] = 20

            # 人体姿态检测
            pose_landmarks, segmentation_mask = tryon_processor.detect_human_pose(user_image)
            task_status[task_id]['progress'] = 40

            # 服装区域分割
            clothing_mask = tryon_processor.segment_clothing_area(user_image, pose_landmarks)
            task_status[task_id]['progress'] = 60

            # 生成虚拟试穿效果
            result_image = tryon_processor.generate_virtual_tryon(
                user_image, clothing_design, pose_landmarks, clothing_mask
            )
            task_status[task_id]['progress'] = 80

            if result_image is not None:
                task_status[task_id]['status'] = 'completed'
                task_status[task_id]['progress'] = 100
                task_status[task_id]['result'] = result_image
            else:
                raise Exception("虚拟试穿生成失败")

        except Exception as e:
            task_status[task_id]['status'] = 'failed'
            task_status[task_id]['error'] = str(e)

    # 在后台线程中处理
    thread = threading.Thread(target=process)
    thread.daemon = True
    thread.start()

@app.route('/api/health', methods=['GET'])
def health_check():
    """健康检查接口"""
    return jsonify({
        'status': 'healthy',
        'service': 'Yigui Virtual Try-On API',
        'version': '1.0.0'
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)`,Pi=`#include <SoftwareSerial.h>
#include <FastLED.h>

SoftwareSerial mySerial(10, 11); // RX, TX
String value;

#define LED_PIN 9
#define NUM_LEDS 64
#define BRIGHTNESS 100

CRGB leds[NUM_LEDS];  // FastLED 控制数组

// 8x8矩阵中的爱心
const int heart[] = {
  9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 42, 43,
  44, 45, 51, 52
};

void setup() {
  mySerial.begin(9600); // 软件串口用于语音模块

  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS); // 初始化灯带
  FastLED.setBrightness(BRIGHTNESS); // 设置亮度
  fill_solid(leds, NUM_LEDS, CRGB::Black); //默认关闭
  FastLED.show();
}

void loop() { //主循环持续监听语音串口
  if (mySerial.available()) {
    value = mySerial.readString();
    value.trim();
    handleCommand(value);
  }
}

void handleCommand(String cmd) { //接收到字符指令后分发给对应灯效函数
  if (cmd == "rainbow") {
    rainbowEffect();
  }
  else if (cmd == "warm") {
    warmLight();
  }
  else if (cmd == "cold") {
    coldLight();
  }
  else if (cmd == "close") {
    turnOff();
  }
  else if (cmd == "heart") {
    heartEffect();
  }
  else {
    // 如果收到未知命令
    turnOff();
  }
}

// 彩虹灯
void rainbowEffect() {
  static uint8_t hue = 0; //色调值 hue 是 0~255 的环形值，代表 HSV 色彩模型中的色相角度。

  while (true) {
    // 检查 mySerial 是否收到"打断"指令
    if (mySerial.available()) {
      String interruptCmd = mySerial.readString();
      interruptCmd.trim();

      if (interruptCmd == "close" || interruptCmd == "warm" || interruptCmd == "cold" || interruptCmd == "heart") {
        handleCommand(interruptCmd);  // 执行其他指令
        break; // 跳出彩虹效果，回到主 loop
      }
    }

    for (int i = 0; i < NUM_LEDS; i++) { // 正向扫描灯珠（彩虹推进）
      leds[i] = CHSV(hue++, 255, 255); // 色调渐变，即在颜色轮上生成一个鲜艳纯色（红→橙→绿→蓝→紫→红...）
      FastLED.show();
      fadeall(); // 所有灯珠略微变暗
      delay(10);
    }

    for (int i = NUM_LEDS - 1; i >= 0; i--) { // 反向扫描灯珠（回扫）
      leds[i] = CHSV(hue++, 255, 255);
      FastLED.show();
      fadeall();
      delay(10);
    }

    delay(100); // 循环之间的缓冲延时
  }
}

// 淡出函数
void fadeall() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i].nscale8(250); // 渐暗
  }
}

// 暖光
void warmLight() {
  fill_solid(leds, NUM_LEDS, CRGB(255, 150, 50));
  FastLED.show();
}

// 冷光
void coldLight() {
  fill_solid(leds, NUM_LEDS, CRGB(150, 200, 255));
  FastLED.show();
}

// 关闭灯效
void turnOff() {
  fill_solid(leds, NUM_LEDS, CRGB::Black);
  FastLED.show();
}

// 爱心效果
void heartEffect() {
  bool on = true;
  while (true) {
    // 检查是否接收到指令来停止闪烁
    if (mySerial.available()) {
      String interruptCmd = mySerial.readString();
      interruptCmd.trim();

      if (interruptCmd == "close" || interruptCmd == "warm" || interruptCmd == "cold" || interruptCmd == "rainbow") {
        handleCommand(interruptCmd);  // 执行其他指令
        break; // 跳出爱心效果，回到主 loop
      }
    }

    // 先清除所有 LED
    fill_solid(leds, NUM_LEDS, CRGB::Black); // 所有 LED 关闭

    // 绘制红色实心爱心
    for (int i = 0; i < sizeof(heart) / sizeof(heart[0]); i++) {
      leds[heart[i]] = on ? CRGB::Red : CRGB::Black;
    }
    FastLED.show();
    delay(500);  // 每次切换后延时，控制闪烁速度
    on = !on; // 翻转灯光状态，实心红色和关闭
  }
}`,Ri=`#include "asr.h"
extern "C"{ void * __dso_handle = 0 ;}
#include "setup.h"
#include "myLib/asr_event.h"
#include "HardwareSerial.h"

uint32_t snid;
void ASR_CODE();

//{speak:阿文-温和男声,vol:10,speed:10,platform:haohaodada}
//{playid:10001,voice:}
//{playid:10002,voice:}

/*描述该功能...
*/
void ASR_CODE(){
  switch (snid) {
   case 1:
    Serial.print("rainbow");
    break;
   case 2:
    Serial.print("warm");
    break;
   case 3:
    Serial.print("cold");
    break;
   case 4:
    Serial.print("heart");
    break;
   case 5:
    Serial.print("close");
    break;
  }

}

void hardware_init(){
  setPinFun(13,SECOND_FUNCTION);
  setPinFun(14,SECOND_FUNCTION);
  Serial.begin(9600);
  vTaskDelete(NULL);
}

void setup()
{
  set_wakeup_forever();
  //{ID:0,keyword:"命令词",ASR:"罗纳尔多",ASRTO:"hello Imran"}
  //{ID:1,keyword:"命令词",ASR:"打开彩虹灯",ASRTO:"彩虹灯打开了"}
  //{ID:2,keyword:"命令词",ASR:"暖光",ASRTO:"暖光打开了"}
  //{ID:3,keyword:"命令词",ASR:"冷光",ASRTO:"冷光打开了"}
  //{ID:4,keyword:"命令词",ASR:"爱心",ASRTO:"给你爱心"}
  //{ID:5,keyword:"命令词",ASR:"关灯",ASRTO:"siuuu"}
  dpmu_set_io_pull(pinToFun[13],DPMU_IO_PULL_DISABLE);
  dpmu_set_io_open_drain(pinToFun[13],ENABLE );
  dpmu_set_io_pull(pinToFun[14],DPMU_IO_PULL_DISABLE);
}`,Ti={__name:"projects",setup(b){const m=_(null),u=_("all"),c=_(""),j=_({isOpen:!1,src:"",title:""}),M=_(!1),L=_(!1);_(!1);const C=_([{id:"led-voice-2025",title:"LED语音交互灯板",year:2025,category:"硬件项目",status:"completed",hasDetails:!0,icon:"💡",coverImage:"/images/projects/led-voice-2025/cover.png",description:"我设计的基于Arduino UNO和ASR-PRO语音识别模块的智能LED显示系统，通过语音指令控制多种灯光效果",badges:[{text:"硬件系统开发",type:"badge-accent"},{text:"Arduino编程",type:"badge-info"}],stats:[{value:"92/100",label:"项目成绩"},{value:"93/100",label:"课程成绩"}]},{id:"mobile-app-2025",title:"中国高校计算机大赛—移动应用创新赛",year:2025,category:"移动应用",status:"completed",hasDetails:!0,icon:"📱",coverImage:"/images/projects/yigui-app-2025/项目封面图.png",description:"我基于 SwiftUI + CoreML 做了一个个性化服装设计与虚拟试穿的 App，同时用 Blender 处理人体模型，并在 Ubuntu 上搭了后端服务。",badges:[{text:"SwiftUI",type:"badge-primary"},{text:"CoreML",type:"badge-info"},{text:"Blender",type:"badge-secondary"}],stats:[{value:"个人项目",label:"独立完成"}]},{id:"restaurant-system-2025",title:"美莲花餐厅支出管理系统",year:2025,category:"管理系统",status:"completed",hasDetails:!0,icon:"🍽️",coverImage:"/images/projects/restaurant-system-2025/登录窗口.png",description:"为我父亲的大型餐厅设计的支出管理系统，包含支出记录、数据分析、报表生成、Deepseek专业分析等功能",badges:[{text:"PyQt6",type:"badge-primary"},{text:"SQLite数据库",type:"badge-info"}],stats:[{value:"100%",label:"功能完成"},{value:"50天以上",label:"平稳运行"}]},{id:"mengsheng-2024",title:'"盟升杯"电子设计竞赛',year:2024,category:"竞赛项目",status:"completed",hasDetails:!0,coverImage:"/images/projects/mengsheng-2024/cover.jpg",description:"我和队友综合运用STM32微控制器、TDOA算法、语音识别、LCD显示等技术设计的一套智能声源识别定位系统",badges:[{text:"硬件系统开发",type:"badge-accent"},{text:"STM32编程",type:"badge-info"}],stats:[{value:"三等奖",label:"竞赛成绩"},{value:"2,000RMB",label:"奖金"}]},{id:"nus-sws-2024",title:"NUS SOC SWS 2024",year:2024,category:"UI/UX设计",status:"completed",hasDetails:!0,coverImage:"/images/projects/nus-sws-2024/cover.png",description:"新加坡国立大学计算机学院年度旗舰项目，我参加了X Cluster下的UI/UX设计交互界面项目",badges:[{text:"UI/UX设计",type:"badge-primary"},{text:"Figma原型",type:"badge-secondary"}],stats:[{value:"TOP 3",label:"团队荣誉"},{value:"A+",label:"个人表现"}]},{id:"nlp-sentiment-2024",title:"NLP情感分析系统",year:2024,category:"机器学习",status:"completed",hasDetails:!0,icon:"🧠",coverImage:"/images/projects/nlp-sentiment-2024/cover.png",description:"基于BERT模型的中文情感分析系统，支持微博、评论等社交媒体文本的情感倾向识别",badges:[{text:"PyTorch",type:"badge-primary"},{text:"BERT模型",type:"badge-info"},{text:"NLP",type:"badge-accent"}],stats:[{value:"94.2%",label:"准确率"},{value:"10万+",label:"训练样本"}]},{id:"react-dashboard-2024",title:"React数据可视化平台",year:2024,category:"Web开发",status:"completed",hasDetails:!0,icon:"📊",coverImage:"/images/projects/react-dashboard-2024/cover.png",description:"基于React的企业级数据可视化平台，支持实时数据监控、图表展示和业务分析",badges:[{text:"React",type:"badge-primary"},{text:"TypeScript",type:"badge-info"},{text:"D3.js",type:"badge-secondary"}],stats:[{value:"15+",label:"图表组件"},{value:"99.9%",label:"可用性"}]},{id:"data-mining-2024",title:"客户行为数据挖掘项目",year:2024,category:"数据科学",status:"completed",hasDetails:!0,icon:"⛏️",coverImage:"/images/projects/data-mining-2024/cover.png",description:"运用聚类分析、时间序列分析等数据挖掘技术，深度分析客户行为模式和消费习惯",badges:[{text:"Python",type:"badge-primary"},{text:"scikit-learn",type:"badge-info"},{text:"Pandas",type:"badge-accent"}],stats:[{value:"5类",label:"客户分群"},{value:"85%",label:"预测准确率"}]}]),E=G(()=>u.value==="all"?C.value:u.value==="completed"?C.value.filter(p=>p.status==="completed"):u.value==="ongoing"?C.value.filter(p=>p.status==="ongoing"):C.value),N=()=>({all:"全部",completed:"已完成",ongoing:"进行中"})[u.value]||"全部",$=p=>{m.value=p,window.scrollTo({top:0,behavior:"smooth"})},d=(p,a)=>{j.value={isOpen:!0,src:p,title:a},document.body.style.overflow="hidden"},P=()=>{j.value.isOpen=!1,document.body.style.overflow="auto"},R=()=>{B(()=>{const p=document.querySelectorAll(".project-card");p.length!==0&&p.forEach((a,k)=>{a.classList.remove("animate-in"),setTimeout(()=>{a.isConnected&&a.classList.add("animate-in")},k*100)})})},n=(p,a)=>{a.preventDefault();const k=document.getElementById(p);if(k){c.value=p;const h=k.getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:h,behavior:"smooth"}),document.querySelectorAll(".section-highlight").forEach(s=>{s.classList.remove("section-highlight")}),setTimeout(()=>{k.classList.add("section-highlight"),setTimeout(()=>{k.classList.remove("section-highlight")},2e3)},300)}},w=async()=>{m.value=null,u.value="all",c.value="",await B(),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{R()},50)};W({title:"项目经历 - 理工科学生个人网站",meta:[{name:"description",content:"展示理工科学生的技术项目发展历程，包括NUS SOC SWS 2024获奖项目、电子设计竞赛、智能硬件开发等多个项目经历"},{name:"keywords",content:"项目展示,NUS SOC SWS,UI/UX设计,电子设计竞赛,智能硬件,移动应用开发,技术历程"}]}),H(u,()=>{R()});const q=()=>{if(!m.value)return;const p=["team-info","team-work","individual-work","achievements","project-summary","project-background","project-overview","system-design","software-algorithm","hardware-implementation","testing-results","project-summary","course-info","project-intro","hardware-design","led-software-design","led-function-demo","led-extended-thinking","led-achievements","team-info","project-background","ui-design","model-assets","system-architecture","algorithm-ml","backend-api","demo-video","achievements","project-summary"];let a="";for(const k of p){const i=document.getElementById(k);if(i){const h=i.getBoundingClientRect();h.top<=200&&h.bottom>200&&(a=k)}}a&&a!==c.value&&(c.value=a)};return K(()=>{R();const p=k=>{k.key==="Escape"&&j.value.isOpen&&P()};document.addEventListener("keydown",p);const a=()=>{q()};window.addEventListener("scroll",a),Q(()=>{document.removeEventListener("keydown",p),window.removeEventListener("scroll",a),document.body.style.overflow="auto"})}),(p,a)=>{const k=V,i=z,h=ma;return r(),v("div",ja,[e(k),t("main",Ca,[m.value?y("",!0):(r(),v("section",Sa,[t("div",Aa,[t("div",Da,[t("button",{onClick:a[0]||(a[0]=s=>u.value="all"),class:o(["category-btn",{active:u.value==="all"}])}," 全部 ",2),t("button",{onClick:a[1]||(a[1]=s=>u.value="completed"),class:o(["category-btn",{active:u.value==="completed"}])}," 已完成 ",2),t("button",{onClick:a[2]||(a[2]=s=>u.value="ongoing"),class:o(["category-btn",{active:u.value==="ongoing"}])}," 进行中 ",2)])]),E.value.length>0?(r(),v("div",Ia,[(r(!0),v(T,null,O(E.value,s=>(r(),v("article",{key:s.id,class:"project-card",onClick:S=>$(s.id)},[t("div",La,[s.coverImage?(r(),X(i,{key:0,src:s.coverImage,alt:s.title+"项目封面",preset:"project",class:"card-cover"},null,8,["src","alt"])):(r(),v("div",Pa,[t("div",Ra,g(s.icon),1),t("span",Ta,g(s.category),1)])),t("div",Oa,[t("span",Fa,g(s.hasDetails?"查看详情":"敬请期待"),1)])]),t("div",Ea,[t("div",Ba,[t("h3",Ua,g(s.title),1),t("span",Na,g(s.year)+"年",1)]),t("p",$a,g(s.description),1),t("div",qa,[(r(!0),v(T,null,O(s.badges,S=>(r(),v("span",{key:S.text,class:o(["badge",S.type])},g(S.text),3))),128))]),s.stats?(r(),v("div",Va,[(r(!0),v(T,null,O(s.stats,S=>(r(),v("div",{key:S.label,class:"stat"},[t("span",za,g(S.value),1),t("span",Ga,g(S.label),1)]))),128))])):y("",!0),s.hasDetails?y("",!0):(r(),v("div",Wa,a[110]||(a[110]=[t("span",{class:"status-coming"},"详情即将更新",-1)])))])],8,Ma))),128))])):(r(),v("div",Ha,[a[111]||(a[111]=t("div",{class:"empty-icon"},"📋",-1)),t("h3",Ka,"暂无"+g(N())+"项目",1),a[112]||(a[112]=t("p",{class:"empty-description"},"该分类下暂时没有项目，请选择其他分类查看",-1))]))])),m.value==="mobile-app-2025"?(r(),v("section",Qa,[t("div",{class:"back-button-container"},[t("button",{onClick:w,class:"back-button"},a[113]||(a[113]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),f(" 返回项目概览 ",-1)]))]),D(t("aside",Ya,[t("div",Xa,[a[114]||(a[114]=t("div",{class:"floating-nav-title"},"导航",-1)),t("nav",Ja,[t("a",{href:"#team-info",onClick:a[3]||(a[3]=s=>n("team-info",s)),class:o(["floating-nav-card",{active:c.value==="team-info"}])},"团队信息",2),t("a",{href:"#project-background",onClick:a[4]||(a[4]=s=>n("project-background",s)),class:o(["floating-nav-card",{active:c.value==="project-background"}])},"项目背景",2),t("a",{href:"#ui-design",onClick:a[5]||(a[5]=s=>n("ui-design",s)),class:o(["floating-nav-card",{active:c.value==="ui-design"}])},"界面设计",2),t("a",{href:"#model-assets",onClick:a[6]||(a[6]=s=>n("model-assets",s)),class:o(["floating-nav-card",{active:c.value==="model-assets"}])},"3D建模",2),t("a",{href:"#system-architecture",onClick:a[7]||(a[7]=s=>n("system-architecture",s)),class:o(["floating-nav-card",{active:c.value==="system-architecture"}])},"系统架构",2),t("a",{href:"#algorithm-ml",onClick:a[8]||(a[8]=s=>n("algorithm-ml",s)),class:o(["floating-nav-card",{active:c.value==="algorithm-ml"}])},"AI算法",2),t("a",{href:"#backend-api",onClick:a[9]||(a[9]=s=>n("backend-api",s)),class:o(["floating-nav-card",{active:c.value==="backend-api"}])},"后端API",2),t("a",{href:"#demo-video",onClick:a[10]||(a[10]=s=>n("demo-video",s)),class:o(["floating-nav-card",{active:c.value==="demo-video"}])},"演示视频",2),t("a",{href:"#achievements",onClick:a[11]||(a[11]=s=>n("achievements",s)),class:o(["floating-nav-card",{active:c.value==="achievements"}])},"竞赛成果",2),t("a",{href:"#project-summary",onClick:a[12]||(a[12]=s=>n("project-summary",s)),class:o(["floating-nav-card",{active:c.value==="project-summary"}])},"项目总结",2)])])],512),[[I,m.value==="mobile-app-2025"]]),a[196]||(a[196]=l('<div class="project-header" data-v-50f125ac><div class="project-title-section" data-v-50f125ac><span class="project-date" data-v-50f125ac>2025年</span><h1 class="project-title" data-v-50f125ac>中国高校计算机大赛—移动应用创新赛</h1><h2 class="project-subtitle" data-v-50f125ac>Yigui / 依柜：个性化服装设计与虚拟试穿应用</h2><div class="project-badges" data-v-50f125ac><span class="badge badge-primary" data-v-50f125ac>SwiftUI</span><span class="badge badge-info" data-v-50f125ac>CoreML</span><span class="badge badge-secondary" data-v-50f125ac>Blender</span><span class="badge badge-accent" data-v-50f125ac>Python后端</span><span class="badge badge-warning" data-v-50f125ac>西南赛区二等奖</span></div></div></div><div id="team-info" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>团队信息</h3></div><div class="team-info-content" data-v-50f125ac><div class="team-info-grid" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>比赛名称</h4></div><div class="info-content" data-v-50f125ac><p data-v-50f125ac>中国高校计算机大赛—移动应用创新赛</p></div></div><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>指导方</h4></div><div class="info-content" data-v-50f125ac><p data-v-50f125ac>个人独立项目</p></div></div><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>团队成员</h4></div><ul class="team-members-list" data-v-50f125ac><li data-v-50f125ac>我 <span class="leader-badge" data-v-50f125ac>独立开发</span> - 产品设计、UI/UX、iOS开发、AI算法、后端系统、3D建模</li></ul></div></div></div></div>',2)),t("div",Za,[a[120]||(a[120]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"项目背景与创新")],-1)),t("div",at,[t("div",tt,[a[119]||(a[119]=l('<div class="background-description" data-v-50f125ac><p data-v-50f125ac> Yigui（依柜）项目源于对个性化服装设计与虚拟试穿技术的探索。在当前时尚产业数字化转型的背景下， 消费者对个性化定制和虚拟体验的需求日益增长。该项目旨在打造一个集成AI设计、虚拟试穿、 个性化推荐于一体的移动应用平台。 </p><div class="innovation-highlights" data-v-50f125ac><div class="highlight-card" data-v-50f125ac><div class="highlight-icon" data-v-50f125ac>🎨</div><h5 data-v-50f125ac>AI驱动设计</h5><p data-v-50f125ac>基于CoreML框架实现智能服装设计生成</p></div><div class="highlight-card" data-v-50f125ac><div class="highlight-icon" data-v-50f125ac>👕</div><h5 data-v-50f125ac>虚拟试穿</h5><p data-v-50f125ac>结合计算机视觉技术实现实时试穿效果</p></div><div class="highlight-card" data-v-50f125ac><div class="highlight-icon" data-v-50f125ac>📱</div><h5 data-v-50f125ac>移动优先</h5><p data-v-50f125ac>采用SwiftUI构建流畅的原生iOS体验</p></div><div class="highlight-card" data-v-50f125ac><div class="highlight-icon" data-v-50f125ac>🔧</div><h5 data-v-50f125ac>全栈实现</h5><p data-v-50f125ac>独立完成前端、后端、AI算法全部开发</p></div></div></div>',1)),t("div",st,[t("div",et,[t("div",it,[a[116]||(a[116]=t("h5",null,"用户需求洞察",-1)),t("div",{class:"gallery-item",onClick:a[13]||(a[13]=s=>d("/images/projects/yigui-app-2025/同理心地图.png","用户需求洞察 - 同理心地图"))},[e(i,{src:"/images/projects/yigui-app-2025/同理心地图.png",alt:"用户需求洞察 - 同理心地图",preset:"photo",class:"analysis-image clickable-image",style:{objectFit:"contain"}}),a[115]||(a[115]=t("span",{class:"gallery-caption"},"同理心地图分析",-1))])]),t("div",dt,[a[118]||(a[118]=t("h5",null,"竞品分析定位",-1)),t("div",{class:"gallery-item",onClick:a[14]||(a[14]=s=>d("/images/projects/yigui-app-2025/竞品雷达图.png","竞品分析 - 产品定位雷达图"))},[e(i,{src:"/images/projects/yigui-app-2025/竞品雷达图.png",alt:"竞品分析 - 产品定位雷达图",preset:"photo",class:"analysis-image clickable-image",style:{objectFit:"contain"}}),a[117]||(a[117]=t("span",{class:"gallery-caption"},"竞品雷达图",-1))])])])])])])]),t("div",lt,[a[133]||(a[133]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"界面设计与用户体验")],-1)),t("div",ct,[t("div",ot,[t("div",nt,[a[131]||(a[131]=t("p",null," Yigui的界面设计注重用户体验的流畅性和功能的直观性。采用现代化的设计语言， 结合iOS设计规范，为用户提供简洁、优雅的虚拟试穿体验。从初始原型到最终实现， 每个界面元素都经过精心设计和用户测试优化。 ",-1)),t("div",rt,[a[122]||(a[122]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"Figma 原型与流程设计")],-1)),t("div",vt,[t("div",{class:"gallery-item max-w-4xl mx-auto",onClick:a[15]||(a[15]=s=>d("/images/projects/yigui-app-2025/Figma初步原型设计.png","Figma 初步原型"))},[e(i,{src:"/images/projects/yigui-app-2025/Figma初步原型设计.png",alt:"Figma 初步原型",preset:"project",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-lg w-full",style:{objectFit:"contain"}}),a[121]||(a[121]=t("span",{class:"gallery-caption text-center"},"Figma 初步原型设计 - 完整的用户界面设计与交互流程",-1))])]),a[123]||(a[123]=l('<div class="figma-highlights max-w-4xl mx-auto mt-6" data-v-50f125ac><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-50f125ac><div class="figma-feature" data-v-50f125ac><h6 data-v-50f125ac>导航设计</h6><p data-v-50f125ac>Tab导航 + 分步流程，清晰的信息架构</p></div><div class="figma-feature" data-v-50f125ac><h6 data-v-50f125ac>状态管理</h6><p data-v-50f125ac>进度指示、按钮状态、草稿自动保存</p></div><div class="figma-feature" data-v-50f125ac><h6 data-v-50f125ac>组件复用</h6><p data-v-50f125ac>色板、图案库、参数面板统一设计</p></div></div></div>',1))]),a[132]||(a[132]=l('<div class="ui-principles-overview" data-v-50f125ac><div class="ui-category" data-v-50f125ac><h4 data-v-50f125ac>设计原则</h4><div class="ui-items" data-v-50f125ac><span class="ui-item" data-v-50f125ac>简洁直观</span><span class="ui-item" data-v-50f125ac>一致性</span><span class="ui-item" data-v-50f125ac>反馈及时</span><span class="ui-item" data-v-50f125ac>易用性</span><span class="ui-item" data-v-50f125ac>美观性</span></div></div><div class="ui-category" data-v-50f125ac><h4 data-v-50f125ac>核心功能</h4><div class="ui-items" data-v-50f125ac><span class="ui-item" data-v-50f125ac>个性化设计</span><span class="ui-item" data-v-50f125ac>虚拟试穿</span><span class="ui-item" data-v-50f125ac>实时预览</span><span class="ui-item" data-v-50f125ac>参数调节</span><span class="ui-item" data-v-50f125ac>结果分享</span></div></div><div class="ui-category" data-v-50f125ac><h4 data-v-50f125ac>交互体验</h4><div class="ui-items" data-v-50f125ac><span class="ui-item" data-v-50f125ac>手势操作</span><span class="ui-item" data-v-50f125ac>动画过渡</span><span class="ui-item" data-v-50f125ac>触觉反馈</span><span class="ui-item" data-v-50f125ac>语音引导</span><span class="ui-item" data-v-50f125ac>智能推荐</span></div></div><div class="ui-category" data-v-50f125ac><h4 data-v-50f125ac>技术框架</h4><div class="ui-items" data-v-50f125ac><span class="ui-item" data-v-50f125ac>SwiftUI</span><span class="ui-item" data-v-50f125ac>Combine</span><span class="ui-item" data-v-50f125ac>CoreML</span><span class="ui-item" data-v-50f125ac>Vision</span><span class="ui-item" data-v-50f125ac>UIKit</span></div></div></div>',1)),t("div",pt,[a[130]||(a[130]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"App界面展示")],-1)),t("div",ft,[t("div",{class:"screenshot-item",onClick:a[16]||(a[16]=s=>d("/images/projects/yigui-app-2025/App截图/登录页面.PNG","登录页面"))},[e(i,{src:"/images/projects/yigui-app-2025/App截图/登录页面.PNG",alt:"登录页面",preset:"project",class:"screenshot-image rounded-lg shadow-lg"}),a[124]||(a[124]=t("span",{class:"screenshot-caption"},"登录页面",-1))]),t("div",{class:"screenshot-item",onClick:a[17]||(a[17]=s=>d("/images/projects/yigui-app-2025/App截图/设计页1_设计类型选择.PNG","设计类型选择"))},[e(i,{src:"/images/projects/yigui-app-2025/App截图/设计页1_设计类型选择.PNG",alt:"设计类型选择",preset:"project",class:"screenshot-image rounded-lg shadow-lg"}),a[125]||(a[125]=t("span",{class:"screenshot-caption"},"设计类型选择",-1))]),t("div",{class:"screenshot-item",onClick:a[18]||(a[18]=s=>d("/images/projects/yigui-app-2025/App截图/设计页2_颜色图案配置.PNG","颜色图案配置"))},[e(i,{src:"/images/projects/yigui-app-2025/App截图/设计页2_颜色图案配置.PNG",alt:"颜色图案配置",preset:"project",class:"screenshot-image rounded-lg shadow-lg"}),a[126]||(a[126]=t("span",{class:"screenshot-caption"},"颜色图案配置",-1))]),t("div",{class:"screenshot-item",onClick:a[19]||(a[19]=s=>d("/images/projects/yigui-app-2025/App截图/设计页3_设计结果展示.PNG","设计结果展示"))},[e(i,{src:"/images/projects/yigui-app-2025/App截图/设计页3_设计结果展示.PNG",alt:"设计结果展示",preset:"project",class:"screenshot-image rounded-lg shadow-lg"}),a[127]||(a[127]=t("span",{class:"screenshot-caption"},"设计结果展示",-1))]),t("div",{class:"screenshot-item",onClick:a[20]||(a[20]=s=>d("/images/projects/yigui-app-2025/App截图/试穿页面_上传照片.PNG","试穿页面"))},[e(i,{src:"/images/projects/yigui-app-2025/App截图/试穿页面_上传照片.PNG",alt:"试穿页面",preset:"project",class:"screenshot-image rounded-lg shadow-lg"}),a[128]||(a[128]=t("span",{class:"screenshot-caption"},"试穿页面",-1))]),t("div",{class:"screenshot-item",onClick:a[21]||(a[21]=s=>d("/images/projects/yigui-app-2025/App截图/试穿页面_试穿结果.PNG","试穿结果"))},[e(i,{src:"/images/projects/yigui-app-2025/App截图/试穿页面_试穿结果.PNG",alt:"试穿结果",preset:"project",class:"screenshot-image rounded-lg shadow-lg"}),a[129]||(a[129]=t("span",{class:"screenshot-caption"},"试穿结果",-1))])])])])])])]),t("div",mt,[a[141]||(a[141]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"3D建模与资源制作")],-1)),t("div",gt,[a[140]||(a[140]=l('<div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>Blender 3D建模制作流程</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-8" data-v-50f125ac> 为了实现逼真的虚拟试穿效果，项目中自主制作了大量3D服装模型和人体模型。 使用Blender进行建模、材质制作和动画制作，确保模型在移动设备上的性能表现和视觉效果。 </p><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-v-50f125ac><div class="modeling-process" data-v-50f125ac><h5 class="process-title" data-v-50f125ac>建模流程</h5><p class="process-desc" data-v-50f125ac>基础网格 → 细节雕刻 → 拓扑优化 → UV展开</p></div><div class="modeling-process" data-v-50f125ac><h5 class="process-title" data-v-50f125ac>材质制作</h5><p class="process-desc" data-v-50f125ac>纹理绘制 → 材质节点 → 渲染测试 → 优化调整</p></div><div class="modeling-process" data-v-50f125ac><h5 class="process-title" data-v-50f125ac>移动端优化</h5><p class="process-desc" data-v-50f125ac>多边形简化 → 纹理压缩 → LOD层级 → 性能测试</p></div></div></div></div>',1)),t("div",ut,[a[138]||(a[138]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"Blender 3D建模作品展示")],-1)),t("div",ht,[t("div",{class:"gallery-item",onClick:a[22]||(a[22]=s=>d("/images/projects/yigui-app-2025/Blender作品/服装建模1_休闲T恤.png","休闲T恤建模"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender作品/服装建模1_休闲T恤.png",alt:"休闲T恤建模",preset:"project",class:"blender-image rounded-lg shadow-lg"}),a[134]||(a[134]=t("span",{class:"gallery-caption text-center"},"休闲T恤 - 基础款式建模与材质制作",-1))]),t("div",{class:"gallery-item",onClick:a[23]||(a[23]=s=>d("/images/projects/yigui-app-2025/Blender作品/服装建模2_正式衬衫.png","正式衬衫建模"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender作品/服装建模2_正式衬衫.png",alt:"正式衬衫建模",preset:"project",class:"blender-image rounded-lg shadow-lg"}),a[135]||(a[135]=t("span",{class:"gallery-caption text-center"},"正式衬衫 - 商务风格建模设计",-1))]),t("div",{class:"gallery-item",onClick:a[24]||(a[24]=s=>d("/images/projects/yigui-app-2025/Blender作品/人体模型_男性.png","男性人体模型"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender作品/人体模型_男性.png",alt:"男性人体模型",preset:"project",class:"blender-image rounded-lg shadow-lg"}),a[136]||(a[136]=t("span",{class:"gallery-caption text-center"},"男性人体模型 - 虚拟试穿基础模型",-1))]),t("div",{class:"gallery-item",onClick:a[25]||(a[25]=s=>d("/images/projects/yigui-app-2025/Blender作品/材质节点示例.png","材质节点编辑"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender作品/材质节点示例.png",alt:"材质节点编辑",preset:"project",class:"blender-image rounded-lg shadow-lg"}),a[137]||(a[137]=t("span",{class:"gallery-caption text-center"},"材质节点编辑 - 复杂材质制作流程",-1))])]),a[139]||(a[139]=l('<div class="blender-highlights max-w-4xl mx-auto mt-6" data-v-50f125ac><div class="grid grid-cols-1 md:grid-cols-4 gap-6" data-v-50f125ac><div class="blender-feature" data-v-50f125ac><h6 data-v-50f125ac>多边形建模</h6><p data-v-50f125ac>低多边形基础建模，适合移动端渲染</p></div><div class="blender-feature" data-v-50f125ac><h6 data-v-50f125ac>材质节点</h6><p data-v-50f125ac>基于节点的复杂材质和纹理制作</p></div><div class="blender-feature" data-v-50f125ac><h6 data-v-50f125ac>UV展开</h6><p data-v-50f125ac>精确的UV映射，保证纹理质量</p></div><div class="blender-feature" data-v-50f125ac><h6 data-v-50f125ac>移动端优化</h6><p data-v-50f125ac>LOD层级设计，适配不同设备性能</p></div></div></div>',1))])])]),t("div",yt,[a[146]||(a[146]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"系统架构设计")],-1)),t("div",bt,[a[144]||(a[144]=l('<div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>整体设计理念</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-6" data-v-50f125ac>前端采用 SwiftUI 构建，设备侧以 CoreML 完成本地推理与参数化渲染；后端部署于 Ubuntu，按&quot;用户/设计/渲染&quot;模块化拆分，提供鉴权、数据持久化与异步渲染任务管理。</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-v-50f125ac><div class="architecture-pillar" data-v-50f125ac><h5 class="pillar-title" data-v-50f125ac>移动端前端</h5><p class="pillar-desc" data-v-50f125ac>SwiftUI + CoreML<br data-v-50f125ac>本地推理与渲染</p></div><div class="architecture-pillar" data-v-50f125ac><h5 class="pillar-title" data-v-50f125ac>数据流转</h5><p class="pillar-desc" data-v-50f125ac>参数化设计数据<br data-v-50f125ac>HTTPS + JWT 安全传输</p></div><div class="architecture-pillar" data-v-50f125ac><h5 class="pillar-title" data-v-50f125ac>服务端后台</h5><p class="pillar-desc" data-v-50f125ac>Ubuntu 部署<br data-v-50f125ac>模块化微服务架构</p></div></div></div></div>',1)),t("div",kt,[a[143]||(a[143]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"系统架构全景图")],-1)),t("div",wt,[t("div",{class:"gallery-item max-w-5xl mx-auto",onClick:a[26]||(a[26]=s=>d("/images/projects/yigui-app-2025/虚拟装配流水线示意图.png","虚拟装配流水线示意图"))},[e(i,{src:"/images/projects/yigui-app-2025/虚拟装配流水线示意图.png",alt:"虚拟装配流水线示意图",preset:"project",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-lg w-full",style:{objectFit:"contain"}}),a[142]||(a[142]=t("span",{class:"gallery-caption text-center"},"Yigui 系统架构全景图 - 前后端分离 + AI模型集成",-1))])])]),a[145]||(a[145]=l('<div class="architecture-details" data-v-50f125ac><div class="details-grid grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-50f125ac><div class="frontend-details" data-v-50f125ac><h4 data-v-50f125ac>前端架构</h4><div class="detail-card" data-v-50f125ac><h5 data-v-50f125ac>📱 SwiftUI 框架</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>声明式UI</strong>：现代化的界面构建方式</li><li data-v-50f125ac><strong data-v-50f125ac>状态管理</strong>：@State, @ObservedObject, @EnvironmentObject</li><li data-v-50f125ac><strong data-v-50f125ac>动画系统</strong>：原生动画与自定义转场</li><li data-v-50f125ac><strong data-v-50f125ac>数据绑定</strong>：响应式编程模式</li></ul></div><div class="detail-card" data-v-50f125ac><h5 data-v-50f125ac>🤖 CoreML 集成</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>本地推理</strong>：离线AI模型运行</li><li data-v-50f125ac><strong data-v-50f125ac>模型优化</strong>：量化压缩，适配移动端</li><li data-v-50f125ac><strong data-v-50f125ac>实时处理</strong>：毫秒级推理响应</li><li data-v-50f125ac><strong data-v-50f125ac>隐私保护</strong>：数据不离开设备</li></ul></div></div><div class="backend-details" data-v-50f125ac><h4 data-v-50f125ac>后端架构</h4><div class="detail-card" data-v-50f125ac><h5 data-v-50f125ac>🐍 Flask 微服务</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>RESTful API</strong>：标准化接口设计</li><li data-v-50f125ac><strong data-v-50f125ac>蓝图模块</strong>：用户/设计/渲染模块拆分</li><li data-v-50f125ac><strong data-v-50f125ac>中间件</strong>：认证、日志、错误处理</li><li data-v-50f125ac><strong data-v-50f125ac>数据验证</strong>：输入校验与API文档</li></ul></div><div class="detail-card" data-v-50f125ac><h5 data-v-50f125ac>💾 数据存储</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>PostgreSQL</strong>：关系型数据主存储</li><li data-v-50f125ac><strong data-v-50f125ac>Redis</strong>：缓存与会话管理</li><li data-v-50f125ac><strong data-v-50f125ac>文件存储</strong>：图片与模型文件管理</li><li data-v-50f125ac><strong data-v-50f125ac>备份策略</strong>：自动备份与恢复机制</li></ul></div></div></div><div class="deployment-overview mt-8" data-v-50f125ac><h4 data-v-50f125ac>部署与运维</h4><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-50f125ac><div class="deploy-item" data-v-50f125ac><h5 data-v-50f125ac>🖥️ 服务器配置</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>操作系统</strong>：Ubuntu 20.04 LTS</li><li data-v-50f125ac><strong data-v-50f125ac>Web服务器</strong>：Gunicorn + Nginx</li><li data-v-50f125ac><strong data-v-50f125ac>进程管理</strong>：systemd 守护进程，自动重启</li><li data-v-50f125ac><strong data-v-50f125ac>监控日志</strong>：分级日志记录，健康状态检查</li></ul></div><div class="deploy-item" data-v-50f125ac><h5 data-v-50f125ac>🔄 异步任务</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>任务队列</strong>：Celery 异步处理</li><li data-v-50f125ac><strong data-v-50f125ac>消息代理</strong>：Redis 作为消息队列</li><li data-v-50f125ac><strong data-v-50f125ac>任务监控</strong>：实时任务状态追踪</li><li data-v-50f125ac><strong data-v-50f125ac>错误恢复</strong>：失败任务重试机制</li></ul></div><div class="deploy-item" data-v-50f125ac><h5 data-v-50f125ac>🛡️ 安全与性能</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>身份验证</strong>：JWT Token 机制</li><li data-v-50f125ac><strong data-v-50f125ac>API限流</strong>：防止滥用与攻击</li><li data-v-50f125ac><strong data-v-50f125ac>HTTPS</strong>：全站SSL加密传输</li><li data-v-50f125ac><strong data-v-50f125ac>缓存优化</strong>：多级缓存策略</li></ul></div></div></div></div>',1))])]),a[197]||(a[197]=l('<div id="algorithm-ml" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>算法与模型（CoreML）</h3></div><div class="work-content space-y-10" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>核心设计原则</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-8" data-v-50f125ac>算法模块负责把用户偏好与体型信息映射为&quot;可解释、可复现&quot;的参数化设计。整体遵循&quot;轻量本地推理 + 参数驱动渲染&quot;的原则，确保离线可用与隐私友好。</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-v-50f125ac><div class="algorithm-principle" data-v-50f125ac><h5 class="principle-title" data-v-50f125ac>轻量化设计</h5><p class="principle-desc" data-v-50f125ac>移动端友好的模型尺寸<br data-v-50f125ac>快速推理响应</p></div><div class="algorithm-principle" data-v-50f125ac><h5 class="principle-title" data-v-50f125ac>参数驱动</h5><p class="principle-desc" data-v-50f125ac>可解释的设计参数<br data-v-50f125ac>复现性保证</p></div><div class="algorithm-principle" data-v-50f125ac><h5 class="principle-title" data-v-50f125ac>隐私保护</h5><p class="principle-desc" data-v-50f125ac>本地推理处理<br data-v-50f125ac>数据不上传云端</p></div></div></div></div><div class="algorithm-modules" data-v-50f125ac><div class="modules-grid grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-50f125ac><div class="module-card" data-v-50f125ac><h4 data-v-50f125ac>🧠 推荐算法模块</h4><div class="module-details" data-v-50f125ac><h5 data-v-50f125ac>基于偏好的智能推荐</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>用户画像</strong>：颜色偏好、风格倾向分析</li><li data-v-50f125ac><strong data-v-50f125ac>协同过滤</strong>：基于相似用户的推荐</li><li data-v-50f125ac><strong data-v-50f125ac>内容过滤</strong>：基于设计特征的匹配</li><li data-v-50f125ac><strong data-v-50f125ac>混合策略</strong>：多算法融合优化</li></ul></div><div class="module-tech" data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong><span data-v-50f125ac>CoreML + 轻量级神经网络</span></div></div><div class="module-card" data-v-50f125ac><h4 data-v-50f125ac>🎨 参数生成模块</h4><div class="module-details" data-v-50f125ac><h5 data-v-50f125ac>设计参数智能映射</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>颜色映射</strong>：HSV色彩空间智能调整</li><li data-v-50f125ac><strong data-v-50f125ac>图案匹配</strong>：纹理库智能检索</li><li data-v-50f125ac><strong data-v-50f125ac>尺寸适配</strong>：体型数据参数化处理</li><li data-v-50f125ac><strong data-v-50f125ac>风格融合</strong>：多维度设计元素组合</li></ul></div><div class="module-tech" data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong><span data-v-50f125ac>参数化设计引擎</span></div></div><div class="module-card" data-v-50f125ac><h4 data-v-50f125ac>👤 体型分析模块</h4><div class="module-details" data-v-50f125ac><h5 data-v-50f125ac>体型数据智能处理</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>数据标准化</strong>：多维度体型数据处理</li><li data-v-50f125ac><strong data-v-50f125ac>尺码匹配</strong>：智能尺码推荐算法</li><li data-v-50f125ac><strong data-v-50f125ac>比例计算</strong>：人体比例优化建议</li><li data-v-50f125ac><strong data-v-50f125ac>适配算法</strong>：服装-体型匹配度评估</li></ul></div><div class="module-tech" data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong><span data-v-50f125ac>数据分析 + 机器学习</span></div></div><div class="module-card" data-v-50f125ac><h4 data-v-50f125ac>🖼️ 渲染优化模块</h4><div class="module-details" data-v-50f125ac><h5 data-v-50f125ac>实时渲染性能优化</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>纹理缓存</strong>：智能预加载与缓存策略</li><li data-v-50f125ac><strong data-v-50f125ac>渲染队列</strong>：异步渲染任务管理</li><li data-v-50f125ac><strong data-v-50f125ac>LOD优化</strong>：多级细节层次渲染</li><li data-v-50f125ac><strong data-v-50f125ac>内存管理</strong>：移动端内存优化</li></ul></div><div class="module-tech" data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong><span data-v-50f125ac>Metal Performance Shaders</span></div></div></div></div><div class="coreml-architecture" data-v-50f125ac><div class="info-header text-center mb-8" data-v-50f125ac><h4 data-v-50f125ac>CoreML模型架构</h4></div><div class="model-details max-w-4xl mx-auto" data-v-50f125ac><div class="model-overview mb-8 text-center" data-v-50f125ac><p class="text-lg leading-relaxed" data-v-50f125ac> 采用轻量级神经网络架构，针对移动端推理进行优化。模型经过量化压缩， 在保证推理精度的同时，实现了毫秒级的响应速度和较小的内存占用。 </p></div><div class="model-specs grid grid-cols-1 md:grid-cols-2 gap-8" data-v-50f125ac><div class="spec-card" data-v-50f125ac><h5 data-v-50f125ac>📊 模型规格</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>模型大小</strong>：&lt; 15MB (量化后)</li><li data-v-50f125ac><strong data-v-50f125ac>推理时间</strong>：&lt; 50ms (iPhone 12+)</li><li data-v-50f125ac><strong data-v-50f125ac>内存占用</strong>：&lt; 30MB 运行时</li><li data-v-50f125ac><strong data-v-50f125ac>支持设备</strong>：A12仿生芯片及以上</li></ul></div><div class="spec-card" data-v-50f125ac><h5 data-v-50f125ac>⚙️ 优化策略</h5><ul data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>模型压缩</strong>：权重量化 + 结构剪枝</li><li data-v-50f125ac><strong data-v-50f125ac>计算优化</strong>：Neural Engine 加速</li><li data-v-50f125ac><strong data-v-50f125ac>内存优化</strong>：模型分片加载</li><li data-v-50f125ac><strong data-v-50f125ac>缓存策略</strong>：推理结果智能缓存</li></ul></div></div><div class="pipeline-flow mt-8" data-v-50f125ac><h5 class="text-center mb-6" data-v-50f125ac>算法流水线</h5><div class="flow-steps" data-v-50f125ac><div class="step" data-v-50f125ac><div class="step-number" data-v-50f125ac>1</div><h6 data-v-50f125ac>输入处理</h6><p data-v-50f125ac>用户偏好 + 体型数据 → 标准化特征向量</p></div><div class="step" data-v-50f125ac><div class="step-number" data-v-50f125ac>2</div><h6 data-v-50f125ac>特征提取</h6><p data-v-50f125ac>深度学习模型 → 设计意图理解</p></div><div class="step" data-v-50f125ac><div class="step-number" data-v-50f125ac>3</div><h6 data-v-50f125ac>参数生成</h6><p data-v-50f125ac>意图解析 → 具体设计参数</p></div><div class="step" data-v-50f125ac><div class="step-number" data-v-50f125ac>4</div><h6 data-v-50f125ac>结果渲染</h6><p data-v-50f125ac>参数驱动 → 最终视觉效果</p></div></div></div></div></div></div></div>',1)),t("div",_t,[a[152]||(a[152]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"AI算法与核心技术")],-1)),t("div",xt,[t("div",jt,[a[147]||(a[147]=l('<div class="algorithm-description" data-v-50f125ac><p data-v-50f125ac> Yigui的核心技术围绕计算机视觉和机器学习展开，实现了从用户图像处理到虚拟试穿的完整AI流程。 前端集成CoreML框架进行本地推理，后端部署TensorFlow模型处理复杂的图像生成任务， 整个系统在保证用户隐私的同时提供高质量的虚拟试穿体验。 </p><div class="tech-pillars" data-v-50f125ac><div class="tech-pillar" data-v-50f125ac><div class="pillar-icon" data-v-50f125ac>👁️</div><h5 data-v-50f125ac>计算机视觉</h5><p data-v-50f125ac>人体姿态检测与服装区域分割</p></div><div class="tech-pillar" data-v-50f125ac><div class="pillar-icon" data-v-50f125ac>🧠</div><h5 data-v-50f125ac>深度学习</h5><p data-v-50f125ac>生成式AI模型实现虚拟试穿</p></div><div class="tech-pillar" data-v-50f125ac><div class="pillar-icon" data-v-50f125ac>⚡</div><h5 data-v-50f125ac>边缘计算</h5><p data-v-50f125ac>CoreML本地推理保护隐私</p></div><div class="tech-pillar" data-v-50f125ac><div class="pillar-icon" data-v-50f125ac>🎨</div><h5 data-v-50f125ac>风格迁移</h5><p data-v-50f125ac>服装设计参数化生成</p></div></div></div>',1)),e(h,{title:"Swift + CoreML 前端图像处理",description:"采用CoreML框架实现图像预处理和本地推理，集成Vision框架进行人体检测，使用Combine实现响应式数据流管理",code:Ai,language:"swift",fileName:"ImageProcessingManager.swift",complexity:"隐私优先的本地推理"}),a[148]||(a[148]=l('<div class="swift-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>Swift前端实现特点</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 前端采用CoreML框架实现图像预处理和本地推理，保护用户隐私的同时提供快速响应。 系统通过Vision框架进行人体检测，使用Combine框架实现响应式数据流管理， 确保在移动设备上的高性能表现。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>隐私优先：</strong>图像处理完全在设备本地进行 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>实时响应：</strong>CoreML优化确保流畅的用户体验 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>内存管理：</strong>自动释放资源，避免内存泄漏 </div></div></div></div>',1)),e(h,{title:"Python + TensorFlow 虚拟试穿核心算法",description:"基于TensorFlow和MediaPipe构建虚拟试穿处理流水线，使用U-Net进行服装分割，GAN模型生成试穿效果",code:Di,language:"python",fileName:"virtual_tryon_processor.py",complexity:"深度学习模型推理"}),a[149]||(a[149]=l('<div class="python-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>Python后端算法架构</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 后端基于TensorFlow和MediaPipe构建虚拟试穿处理流水线，使用U-Net进行服装分割， GAN模型生成试穿效果，支持多种服装类型和风格的智能处理。 系统采用异步处理架构，确保高并发场景下的稳定性能。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>精确分割：</strong>基于深度学习的服装区域检测 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>姿态感知：</strong>MediaPipe人体关键点检测 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>风格编码：</strong>服装设计参数向量化表示 </div></div></div></div>',1)),e(h,{title:"3D模型实时渲染算法",description:"基于Metal Performance Shaders的高性能3D渲染引擎，支持实时光照、材质和阴影计算",code:Ii,language:"swift",fileName:"ModelRenderingEngine.swift",complexity:"GPU加速渲染"}),a[150]||(a[150]=l('<div class="rendering-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>3D渲染技术实现</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 采用Metal Performance Shaders构建高性能3D渲染引擎，支持实时光照、材质和阴影计算。 系统通过LOD技术和渲染管线优化，在移动设备上实现60FPS的流畅渲染体验。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>GPU加速：</strong>Metal Performance Shaders优化 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>实时渲染：</strong>60FPS流畅体验 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>自适应LOD：</strong>动态细节级别调整 </div></div></div></div>',1)),e(h,{title:"智能推荐算法",description:"基于用户行为和偏好的协同过滤推荐算法，结合内容特征实现个性化服装推荐",code:Mi,language:"python",fileName:"recommendation_engine.py",complexity:"机器学习推荐"}),a[151]||(a[151]=l('<div class="recommendation-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>智能推荐系统</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 基于用户行为和偏好的协同过滤推荐算法，结合内容特征实现个性化服装推荐。 系统通过机器学习模型分析用户喜好，提供精准的设计建议和风格匹配。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>协同过滤：</strong>基于用户行为的推荐 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>内容分析：</strong>服装特征向量化 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>实时学习：</strong>动态调整推荐策略 </div></div></div></div>',1))])])]),t("div",Ct,[a[166]||(a[166]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"虚拟人体模型与材质（Blender）")],-1)),t("div",St,[a[165]||(a[165]=t("div",{class:"info-card"},[t("div",{class:"info-header text-center"},[t("h4",null,"目标与概述")]),t("div",{class:"info-content max-w-4xl mx-auto text-center"},[t("p",{class:"text-lg leading-relaxed"},"我自学 Blender，并使用了具有版权许可的男/女基础模型。在保证移动端性能与观感平衡的前提下，我做了拓扑简化、法线修复与贴图整理；同时统一坐标/尺度与命名规范，确保服装在不同体型上的稳定贴合。为了让后端的 Linux 版 Blender 更好地处理批量渲染，我精简并改写了材质节点，只保留必需通道，减少跨平台差异。")])],-1)),t("div",At,[t("div",Dt,[a[154]||(a[154]=t("div",{class:"model-item-header"},[t("h4",null,"男性基础模型处理")],-1)),t("div",It,[t("div",{class:"gallery-item",onClick:a[27]||(a[27]=s=>d("/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型.png","默认男模型"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型.png",alt:"默认男模型",preset:"photo",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-sm w-full",style:{objectFit:"contain"}}),a[153]||(a[153]=t("span",{class:"gallery-caption"},"默认男模型",-1))])]),a[155]||(a[155]=t("div",{class:"model-item-content"},[t("ul",{class:"list-disc pl-5 space-y-2 text-gray-700"},[t("li",null,[t("strong",null,"模型简化："),f("在不影响主要轮廓的前提下降多边形面数")]),t("li",null,[t("strong",null,"法线与缝合："),f("统一法线方向，修复边界缝合避免破面")]),t("li",null,[t("strong",null,"UV/贴图："),f("整理 UV，输出统一尺寸的贴图集")]),t("li",null,[t("strong",null,"坐标规范："),f("建立统一坐标系统，确保稳定贴合")])])],-1))]),t("div",Mt,[a[157]||(a[157]=t("div",{class:"model-item-header"},[t("h4",null,"材质节点系统优化")],-1)),t("div",Lt,[t("div",{class:"gallery-item",onClick:a[28]||(a[28]=s=>d("/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型材质节点.png","默认男模型材质节点"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型材质节点.png",alt:"默认男模型材质节点",preset:"photo",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-sm w-full",style:{objectFit:"contain"}}),a[156]||(a[156]=t("span",{class:"gallery-caption"},"默认男模型材质节点",-1))])]),a[158]||(a[158]=t("div",{class:"model-item-content"},[t("ul",{class:"list-disc pl-5 space-y-2 text-gray-700"},[t("li",null,[t("strong",null,"节点精简："),f("只保留颜色、金属度、粗糙度、法线等关键通道")]),t("li",null,[t("strong",null,"PBR 优化："),f("纹理叠加模拟布料质感，移动端表现稳定")]),t("li",null,[t("strong",null,"跨平台适配："),f("减少 Linux 与 macOS 之间的差异")]),t("li",null,[t("strong",null,"渲染性能："),f("参数化投影替代布料仿真")])])],-1))]),t("div",Pt,[a[160]||(a[160]=t("div",{class:"model-item-header"},[t("h4",null,"女性模型精细化处理")],-1)),t("div",Rt,[t("div",{class:"gallery-item",onClick:a[29]||(a[29]=s=>d("/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型_简化后.png","默认女模型 - 简化后"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型_简化后.png",alt:"默认女模型 - 简化后",preset:"photo",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-sm w-full",style:{objectFit:"contain"}}),a[159]||(a[159]=t("span",{class:"gallery-caption"},"默认女模型 - 简化后",-1))])]),a[161]||(a[161]=t("div",{class:"model-item-content"},[t("ul",{class:"list-disc pl-5 space-y-2 text-gray-700"},[t("li",null,[t("strong",null,"精细简化："),f("保持女性体型特征的前提下进行拓扑优化")]),t("li",null,[t("strong",null,"服装适配："),f("针对女性服装特点调整骨骼绑定")]),t("li",null,[t("strong",null,"质量平衡："),f("在移动端性能与视觉效果间找到平衡")]),t("li",null,[t("strong",null,"细节保留："),f("保留关键特征，确保试穿效果真实")])])],-1))]),t("div",Tt,[a[163]||(a[163]=t("div",{class:"model-item-header"},[t("h4",null,"女性模型材质系统")],-1)),t("div",Ot,[t("div",{class:"gallery-item",onClick:a[30]||(a[30]=s=>d("/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型材质节点_简化后.png","默认女模型材质节点 - 简化后"))},[e(i,{src:"/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型材质节点_简化后.png",alt:"默认女模型材质节点 - 简化后",preset:"photo",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-sm w-full",style:{objectFit:"contain"}}),a[162]||(a[162]=t("span",{class:"gallery-caption"},"默认女模型材质节点 - 简化后",-1))])]),a[164]||(a[164]=t("div",{class:"model-item-content"},[t("ul",{class:"list-disc pl-5 space-y-2 text-gray-700"},[t("li",null,[t("strong",null,"材质统一："),f("与男性模型保持相同的材质节点结构")]),t("li",null,[t("strong",null,"皮肤质感："),f("优化皮肤材质的次表面散射效果")]),t("li",null,[t("strong",null,"光照适配："),f("调整材质参数适应不同光照环境")]),t("li",null,[t("strong",null,"服装兼容："),f("确保与各类服装材质的良好融合")])])],-1))])])])]),t("div",{id:"backend-api",class:"section"},[a[173]||(a[173]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"后端系统与API设计")],-1)),t("div",{class:"backend-content"},[t("div",{class:"backend-main-content"},[a[172]||(a[172]=l('<div class="backend-description" data-v-50f125ac><p data-v-50f125ac> 后端系统基于Python Flask框架构建，采用RESTful API设计原则，提供完整的用户管理、 图像处理、虚拟试穿等服务。系统支持异步任务处理，通过任务队列管理耗时的AI推理操作， 确保前端用户体验的流畅性。部署在Ubuntu服务器上，具备良好的扩展性和稳定性。 </p><div class="backend-highlights" data-v-50f125ac><div class="backend-feature" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>🔌</div><h5 data-v-50f125ac>RESTful API</h5><p data-v-50f125ac>标准化接口设计，支持多平台接入</p></div><div class="backend-feature" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>⚡</div><h5 data-v-50f125ac>异步处理</h5><p data-v-50f125ac>Celery任务队列处理耗时操作</p></div><div class="backend-feature" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>🔐</div><h5 data-v-50f125ac>安全认证</h5><p data-v-50f125ac>JWT Token身份验证机制</p></div><div class="backend-feature" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>📊</div><h5 data-v-50f125ac>数据管理</h5><p data-v-50f125ac>SQLAlchemy ORM + Redis缓存</p></div></div></div>',1)),t("div",{class:"api-implementations"},[t("div",{class:"api-card"},[a[168]||(a[168]=t("div",{class:"api-header"},[t("h4",null,"🌐 Flask API 服务实现")],-1)),a[169]||(a[169]=t("div",{class:"api-description"},[t("p",null,"基于Flask构建的REST API服务，提供图像上传、处理状态查询、结果获取等核心功能。支持跨域请求，集成了完整的错误处理和日志记录机制。")],-1)),t("div",{class:"code-showcase"},[a[167]||(a[167]=t("div",{class:"code-header"},[t("h5",null,"API服务核心代码"),t("span",{class:"code-language"},"Python")],-1)),t("pre",null,[t("code",{class:"language-python"},g(Li))])]),a[170]||(a[170]=l('<div class="api-endpoints" data-v-50f125ac><h5 data-v-50f125ac>主要API端点</h5><div class="endpoint-list" data-v-50f125ac><div class="endpoint-item" data-v-50f125ac><span class="http-method post" data-v-50f125ac>POST</span><span class="endpoint-path" data-v-50f125ac>/api/upload-image</span><span class="endpoint-desc" data-v-50f125ac>上传用户图像并启动虚拟试穿任务</span></div><div class="endpoint-item" data-v-50f125ac><span class="http-method get" data-v-50f125ac>GET</span><span class="endpoint-path" data-v-50f125ac>/api/task-status/{id}</span><span class="endpoint-desc" data-v-50f125ac>查询处理任务的状态和进度</span></div><div class="endpoint-item" data-v-50f125ac><span class="http-method get" data-v-50f125ac>GET</span><span class="endpoint-path" data-v-50f125ac>/api/health</span><span class="endpoint-desc" data-v-50f125ac>健康检查接口</span></div></div></div>',1))]),a[171]||(a[171]=l('<div class="deployment-card" data-v-50f125ac><div class="deployment-header" data-v-50f125ac><h4 data-v-50f125ac>🚀 部署架构与运维</h4></div><div class="deployment-overview" data-v-50f125ac><div class="deploy-section" data-v-50f125ac><h5 data-v-50f125ac>服务器配置</h5><div class="config-grid" data-v-50f125ac><div class="config-item" data-v-50f125ac><strong data-v-50f125ac>操作系统:</strong> Ubuntu 20.04 LTS </div><div class="config-item" data-v-50f125ac><strong data-v-50f125ac>Python版本:</strong> Python 3.8+ </div><div class="config-item" data-v-50f125ac><strong data-v-50f125ac>Web服务器:</strong> Gunicorn + Nginx </div><div class="config-item" data-v-50f125ac><strong data-v-50f125ac>任务队列:</strong> Celery + Redis </div></div></div><div class="deploy-section" data-v-50f125ac><h5 data-v-50f125ac>技术特性</h5><div class="feature-grid" data-v-50f125ac><div class="tech-highlight" data-v-50f125ac><strong data-v-50f125ac>🔄 异步处理:</strong> 后台任务队列处理AI推理，避免阻塞请求 </div><div class="tech-highlight" data-v-50f125ac><strong data-v-50f125ac>💾 数据缓存:</strong> Redis缓存频繁访问的数据，提升响应速度 </div><div class="tech-highlight" data-v-50f125ac><strong data-v-50f125ac>📝 日志监控:</strong> 完整的请求日志和错误追踪机制 </div><div class="tech-highlight" data-v-50f125ac><strong data-v-50f125ac>🔒 安全防护:</strong> CORS跨域配置和请求限流保护 </div></div></div></div></div>',1))])])])]),t("div",Ft,[a[182]||(a[182]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"系统架构设计")],-1)),t("div",Et,[a[176]||(a[176]=l('<div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>整体设计理念</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-6" data-v-50f125ac>前端采用 SwiftUI 构建，设备侧以 CoreML 完成本地推理与参数化渲染；后端部署于 Ubuntu，按&quot;用户/设计/渲染&quot;模块化拆分，提供鉴权、数据持久化与异步渲染任务管理。</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-v-50f125ac><div class="architecture-pillar" data-v-50f125ac><h5 class="pillar-title" data-v-50f125ac>移动端前端</h5><p class="pillar-desc" data-v-50f125ac>SwiftUI + CoreML<br data-v-50f125ac>本地推理与渲染</p></div><div class="architecture-pillar" data-v-50f125ac><h5 class="pillar-title" data-v-50f125ac>数据流转</h5><p class="pillar-desc" data-v-50f125ac>参数化设计数据<br data-v-50f125ac>HTTPS + JWT 安全传输</p></div><div class="architecture-pillar" data-v-50f125ac><h5 class="pillar-title" data-v-50f125ac>服务端后台</h5><p class="pillar-desc" data-v-50f125ac>Ubuntu 部署<br data-v-50f125ac>模块化微服务架构</p></div></div></div></div>',1)),t("div",Bt,[a[175]||(a[175]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"系统架构全景图")],-1)),t("div",Ut,[t("div",{class:"gallery-item max-w-5xl mx-auto",onClick:a[31]||(a[31]=s=>d("/images/projects/yigui-app-2025/虚拟装配流水线示意图.png","虚拟装配流水线示意图"))},[e(i,{src:"/images/projects/yigui-app-2025/虚拟装配流水线示意图.png",alt:"虚拟装配流水线示意图",preset:"project",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-lg w-full",style:{objectFit:"contain"}}),a[174]||(a[174]=t("span",{class:"gallery-caption text-center"},"虚拟装配流水线示意图 - 从用户输入到最终渲染的完整数据流",-1))])])]),a[177]||(a[177]=l('<div class="architecture-details" data-v-50f125ac><div class="team-info-grid" data-v-50f125ac><div class="info-card enhanced" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>📱 App 前端（SwiftUI）</h4></div><div class="info-content" data-v-50f125ac><div class="tech-section" data-v-50f125ac><h5 class="tech-section-title" data-v-50f125ac>功能模块架构</h5><ul class="yigui-list list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>Auth</strong> - 登录注册模块，支持手机号/邮箱验证</li><li data-v-50f125ac><strong data-v-50f125ac>Design</strong> - 三步设计流程，参数化配置界面</li><li data-v-50f125ac><strong data-v-50f125ac>Wardrobe</strong> - 设计作品管理，本地缓存优化</li><li data-v-50f125ac><strong data-v-50f125ac>Avatar</strong> - 3D模型展示，实时试穿预览</li><li data-v-50f125ac><strong data-v-50f125ac>Profile</strong> - 用户设置，隐私控制中心</li></ul></div><div class="tech-section mt-6" data-v-50f125ac><h5 class="tech-section-title" data-v-50f125ac>核心数据模型</h5><div class="code-blocks space-y-3" data-v-50f125ac><div class="code-block" data-v-50f125ac><code class="model-name" data-v-50f125ac>User</code><p data-v-50f125ac>id, 昵称, 联系方式, 隐私设置</p></div><div class="code-block" data-v-50f125ac><code class="model-name" data-v-50f125ac>Design</code><p data-v-50f125ac>设计ID, 用户ID, 服装参数, 颜色/图案配置</p></div><div class="code-block" data-v-50f125ac><code class="model-name" data-v-50f125ac>BodyProfile</code><p data-v-50f125ac>身高体重, 体型分类 (仅本地存储)</p></div></div></div><div class="tech-section mt-6" data-v-50f125ac><h5 class="tech-section-title" data-v-50f125ac>网络与数据</h5><ul class="yigui-list list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>网络层</strong>：幂等的 RESTful API，自动重试机制</li><li data-v-50f125ac><strong data-v-50f125ac>缓存策略</strong>：离线优先，本地数据持久化</li><li data-v-50f125ac><strong data-v-50f125ac>性能优化</strong>：图片懒加载，3D模型分级缓存</li></ul></div></div></div><div class="info-card enhanced" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>🖥️ 服务端（Ubuntu）</h4></div><div class="info-content" data-v-50f125ac><div class="tech-section" data-v-50f125ac><h5 class="tech-section-title" data-v-50f125ac>微服务模块</h5><ul class="yigui-list list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>Auth Service</strong> - JWT 令牌管理，用户鉴权</li><li data-v-50f125ac><strong data-v-50f125ac>Design Service</strong> - 设计数据 CRUD，资产索引</li><li data-v-50f125ac><strong data-v-50f125ac>Render Service</strong> - 异步渲染队列，任务调度</li></ul></div><div class="tech-section mt-6" data-v-50f125ac><h5 class="tech-section-title" data-v-50f125ac>核心 API 接口</h5><div class="api-blocks space-y-3" data-v-50f125ac><div class="api-block" data-v-50f125ac><code class="api-method" data-v-50f125ac>POST</code><span class="api-path" data-v-50f125ac>/api/v1/auth/login</span><p data-v-50f125ac>登录认证，换取访问令牌</p></div><div class="api-block" data-v-50f125ac><code class="api-method" data-v-50f125ac>GET</code><span class="api-path" data-v-50f125ac>/api/v1/designs</span><p data-v-50f125ac>分页查询用户设计作品</p></div><div class="api-block" data-v-50f125ac><code class="api-method" data-v-50f125ac>POST</code><span class="api-path" data-v-50f125ac>/api/v1/renders</span><p data-v-50f125ac>提交3D渲染任务请求</p></div></div></div><div class="tech-section mt-6" data-v-50f125ac><h5 class="tech-section-title" data-v-50f125ac>部署与运维</h5><ul class="yigui-list list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>数据存储</strong>：SQLite 数据库，参数化数据持久化</li><li data-v-50f125ac><strong data-v-50f125ac>静态资源</strong>：Nginx 托管，CDN 加速优化</li><li data-v-50f125ac><strong data-v-50f125ac>服务管理</strong>：systemd 守护进程，自动重启</li><li data-v-50f125ac><strong data-v-50f125ac>监控日志</strong>：分级日志记录，健康状态检查</li></ul></div></div></div></div></div>',1))]),t("div",Nt,[a[178]||(a[178]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"核心代码实现")],-1)),e(h,{title:"Flask后端API服务",description:"基于Flask构建的RESTful API服务，处理用户认证、设计数据管理和渲染任务调度",code:p.flaskBackendCode,language:"python",fileName:"app.py",complexity:"微服务架构"},null,8,["code"]),a[179]||(a[179]=l('<div class="flask-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>Flask后端架构特点</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 后端采用Flask微服务架构，通过蓝图模式组织路由，集成JWT认证和CORS跨域支持。 系统使用SQLAlchemy ORM进行数据管理，Redis缓存提升性能，Celery处理异步任务。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>模块化设计：</strong>蓝图模式组织API路由 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>异步处理：</strong>Celery后台任务队列 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>数据缓存：</strong>Redis提升响应性能 </div></div></div></div>',1)),e(h,{title:"数据库模型定义",description:"使用SQLAlchemy ORM定义核心数据模型，包括用户、设计和渲染任务等实体关系",code:p.databaseModelsCode,language:"python",fileName:"models.py",complexity:"ORM数据建模"},null,8,["code"]),a[180]||(a[180]=l('<div class="database-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>数据库设计特点</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 数据库设计遵循第三范式，通过SQLAlchemy ORM实现对象关系映射。 用户表与设计表建立一对多关系，渲染任务表记录异步处理状态， 支持数据完整性约束和索引优化。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>关系设计：</strong>规范化的实体关系模型 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>数据完整性：</strong>外键约束和验证机制 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>性能优化：</strong>索引策略和查询优化 </div></div></div></div>',1)),e(h,{title:"SwiftUI前端架构",description:"采用MVVM架构模式的SwiftUI应用，集成Combine响应式编程和CoreML本地推理",code:p.swiftuiArchitectureCode,language:"swift",fileName:"ContentView.swift",complexity:"MVVM响应式架构"},null,8,["code"]),a[181]||(a[181]=l('<div class="swiftui-implementation-results" data-v-50f125ac><h4 data-v-50f125ac>SwiftUI架构设计</h4><div class="implementation-description" data-v-50f125ac><p data-v-50f125ac> 前端采用SwiftUI的MVVM架构模式，通过@StateObject和@ObservedObject实现数据绑定。 使用Combine框架处理异步数据流，NavigationView管理页面导航， 确保代码的可维护性和可测试性。 </p></div><div class="implementation-highlights" data-v-50f125ac><div class="highlight-grid grid grid-cols-1 md:grid-cols-3 gap-4" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>MVVM架构：</strong>清晰的业务逻辑分离 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>响应式编程：</strong>Combine数据流管理 </div><div class="highlight-item" data-v-50f125ac><strong data-v-50f125ac>状态管理：</strong>统一的应用状态控制 </div></div></div></div>',1))])]),t("div",$t,[a[189]||(a[189]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"算法与模型（CoreML）")],-1)),t("div",qt,[a[187]||(a[187]=l('<div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>核心设计原则</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-8" data-v-50f125ac>算法模块负责把用户偏好与体型信息映射为&quot;可解释、可复现&quot;的参数化设计。整体遵循&quot;轻量本地推理 + 参数驱动渲染&quot;的原则，确保离线可用与隐私友好。</p><div class="algorithm-principles grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-v-50f125ac><div class="principle-card" data-v-50f125ac><h5 class="principle-title" data-v-50f125ac>本地推理</h5><p class="principle-desc" data-v-50f125ac>CoreML 轻量模型<br data-v-50f125ac>设备端智能分析</p></div><div class="principle-card" data-v-50f125ac><h5 class="principle-title" data-v-50f125ac>参数驱动</h5><p class="principle-desc" data-v-50f125ac>可解释的数值参数<br data-v-50f125ac>100% 可复现设计</p></div><div class="principle-card" data-v-50f125ac><h5 class="principle-title" data-v-50f125ac>隐私保护</h5><p class="principle-desc" data-v-50f125ac>离线处理优先<br data-v-50f125ac>无需上传敏感数据</p></div></div></div></div>',1)),t("div",Vt,[a[184]||(a[184]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"CoreML 算法处理流程")],-1)),t("div",zt,[t("div",{class:"gallery-item max-w-4xl mx-auto",onClick:a[32]||(a[32]=s=>d("/images/projects/yigui-app-2025/CoreML 算法流程图.png","CoreML 算法流程图"))},[e(i,{src:"/images/projects/yigui-app-2025/CoreML 算法流程图.png",alt:"CoreML 算法流程图",preset:"project",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-lg w-full",style:{objectFit:"contain"}}),a[183]||(a[183]=t("span",{class:"gallery-caption text-center"},"CoreML 算法流程图 - 从用户输入到参数化输出的完整智能分析流程",-1))])])]),t("div",Gt,[a[186]||(a[186]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"参数化表达系统")],-1)),t("div",Wt,[t("div",{class:"gallery-item max-w-3xl mx-auto",onClick:a[33]||(a[33]=s=>d("/images/projects/yigui-app-2025/未来设计双重体验概念图.png","未来设计双重体验概念图"))},[e(i,{src:"/images/projects/yigui-app-2025/未来设计双重体验概念图.png",alt:"未来设计双重体验概念图",preset:"project",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-lg w-full",style:{objectFit:"contain"}}),a[185]||(a[185]=t("span",{class:"gallery-caption text-center"},"未来设计双重体验概念图 - 参数化设计的直观表达",-1))])])]),a[188]||(a[188]=l('<div class="parametric-categories" data-v-50f125ac><div class="param-grid grid grid-cols-1 md:grid-cols-3 gap-8" data-v-50f125ac><div class="param-category-card" data-v-50f125ac><div class="param-category-header" data-v-50f125ac><h5 class="param-title" data-v-50f125ac>颜色参数系统</h5></div><div class="param-category-content" data-v-50f125ac><ul class="list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>HSV 色彩空间</strong>：色相/饱和度/明度的精确数值控制</li><li data-v-50f125ac><strong data-v-50f125ac>预设调色板</strong>：经专业配色师调试的和谐色彩组合</li><li data-v-50f125ac><strong data-v-50f125ac>智能推荐</strong>：基于用户偏好的色彩建议算法</li></ul></div></div><div class="param-category-card" data-v-50f125ac><div class="param-category-header" data-v-50f125ac><h5 class="param-title" data-v-50f125ac>图案与纹理</h5></div><div class="param-category-content" data-v-50f125ac><ul class="list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>图案分类</strong>：几何、花卉、抽象等类别的参数化定义</li><li data-v-50f125ac><strong data-v-50f125ac>纹理索引</strong>：高质量纹理库的智能检索与匹配</li><li data-v-50f125ac><strong data-v-50f125ac>变换参数</strong>：缩放、旋转、偏移的精确数值控制</li></ul></div></div><div class="param-category-card" data-v-50f125ac><div class="param-category-header" data-v-50f125ac><h5 class="param-title" data-v-50f125ac>版型与尺寸</h5></div><div class="param-category-content" data-v-50f125ac><ul class="list-disc pl-5 space-y-2 text-gray-700" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>关键部位</strong>：肩宽、胸围、腰围、臀围等核心尺寸参数</li><li data-v-50f125ac><strong data-v-50f125ac>长度控制</strong>：裙长、袖长、下摆等长度的连续调节</li><li data-v-50f125ac><strong data-v-50f125ac>版型风格</strong>：修身、宽松、A字等风格的离散选择</li></ul></div></div></div></div><div class="tech-deep-dive" data-v-50f125ac><div class="info-header text-center mb-8" data-v-50f125ac><h4 data-v-50f125ac>本地推理与实时渲染技术</h4></div><div class="tech-content max-w-5xl mx-auto" data-v-50f125ac><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-50f125ac><div class="tech-column" data-v-50f125ac><h5 class="tech-column-title" data-v-50f125ac>CoreML 智能推理</h5><div class="tech-details space-y-4" data-v-50f125ac><div class="tech-item" data-v-50f125ac><h6 class="tech-item-title" data-v-50f125ac>偏好分析模型</h6><p class="tech-item-desc" data-v-50f125ac>基于用户历史行为和输入偏好，进行分类与回归分析，输出个性化的参数建议区间</p></div><div class="tech-item" data-v-50f125ac><h6 class="tech-item-title" data-v-50f125ac>体型适配算法</h6><p class="tech-item-desc" data-v-50f125ac>结合用户身高体重数据，智能调整服装版型参数，确保最佳的试穿效果</p></div><div class="tech-item" data-v-50f125ac><h6 class="tech-item-title" data-v-50f125ac>默认值生成</h6><p class="tech-item-desc" data-v-50f125ac>为每个参数生成合理的默认值和调节范围，降低用户设计门槛</p></div></div></div><div class="tech-column" data-v-50f125ac><h5 class="tech-column-title" data-v-50f125ac>实时渲染引擎</h5><div class="tech-details space-y-4" data-v-50f125ac><div class="tech-item" data-v-50f125ac><h6 class="tech-item-title" data-v-50f125ac>参数化投影</h6><p class="tech-item-desc" data-v-50f125ac>将抽象参数实时投影到材质属性、纹理坐标和几何变换上</p></div><div class="tech-item" data-v-50f125ac><h6 class="tech-item-title" data-v-50f125ac>预览更新机制</h6><p class="tech-item-desc" data-v-50f125ac>毫秒级响应用户操作，实时更新3D模型预览，提供即时视觉反馈</p></div><div class="tech-item" data-v-50f125ac><h6 class="tech-item-title" data-v-50f125ac>数据压缩存储</h6><p class="tech-item-desc" data-v-50f125ac>仅保存参数与缩略图，可100%复现设计，无需依赖原始用户人像数据</p></div></div></div></div></div></div>',2))])]),a[198]||(a[198]=l('<div id="demo-video" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>完整功能演示</h3></div><div class="work-content space-y-8" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>产品核心流程演示</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-6" data-v-50f125ac>以下视频展示了 Yigui / 依柜 App 的完整操作流程，从用户登录、设计创建、参数调整到最终的 3D 试穿效果。演示在 iOS 模拟器中进行，展现了真实的用户体验和流畅的交互设计。</p><div class="demo-highlights grid grid-cols-1 md:grid-cols-4 gap-6 mt-8" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><h5 class="highlight-title" data-v-50f125ac>用户认证</h5><p class="highlight-desc" data-v-50f125ac>登录注册流程</p></div><div class="highlight-item" data-v-50f125ac><h5 class="highlight-title" data-v-50f125ac>设计创作</h5><p class="highlight-desc" data-v-50f125ac>三步设计流程</p></div><div class="highlight-item" data-v-50f125ac><h5 class="highlight-title" data-v-50f125ac>参数调整</h5><p class="highlight-desc" data-v-50f125ac>颜色图案配置</p></div><div class="highlight-item" data-v-50f125ac><h5 class="highlight-title" data-v-50f125ac>虚拟试穿</h5><p class="highlight-desc" data-v-50f125ac>3D模型预览</p></div></div></div></div><div class="video-showcase" data-v-50f125ac><div class="video-container mx-auto max-w-[920px]" data-v-50f125ac><div class="video-wrapper" data-v-50f125ac><video controls="controls" preload="metadata" class="video-player w-full mx-auto rounded-xl shadow-2xl" poster="'+ga+'" data-v-50f125ac><source src="'+ua+'" type="video/webm" data-v-50f125ac><p data-v-50f125ac>您的浏览器不支持视频播放。<a href="/videos/projects/yigui-app-2025/在模拟机完整操作视频.webm" target="_blank" style="color:#ff6b35;" data-v-50f125ac>点击下载视频</a></p></video></div><div class="video-info text-center mt-6" data-v-50f125ac><h5 class="video-title" data-v-50f125ac>Yigui / 依柜 - 完整功能演示</h5><p class="video-description" data-v-50f125ac>在 iOS 模拟器上演示从登录到试穿的完整用户流程</p><div class="video-specs mt-4" data-v-50f125ac><span class="spec-item" data-v-50f125ac>📱 iOS 模拟器</span><span class="spec-item" data-v-50f125ac>⏱️ 完整流程</span><span class="spec-item" data-v-50f125ac>🎥 高清演示</span></div></div></div></div></div></div><div id="docs" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>文档与素材下载</h3></div><div class="work-content space-y-8" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>项目文档与材料</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-8" data-v-50f125ac>提供完整的项目技术报告、设计文档和宣传材料下载。这些文档详细记录了项目的技术实现过程、设计思路和创新点，供学习参考使用。</p></div></div><div class="downloads-showcase" data-v-50f125ac><div class="downloads-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-v-50f125ac><div class="download-card" data-v-50f125ac><div class="download-header" data-v-50f125ac><div class="download-icon-large" data-v-50f125ac>📋</div><h5 class="download-title" data-v-50f125ac>初赛技术报告</h5><p class="download-subtitle" data-v-50f125ac>项目概述与技术方案</p></div><div class="download-content" data-v-50f125ac><ul class="download-features" data-v-50f125ac><li data-v-50f125ac>• 项目背景与目标设定</li><li data-v-50f125ac>• 技术方案选型分析</li><li data-v-50f125ac>• 核心算法设计思路</li><li data-v-50f125ac>• 初步实现与测试结果</li></ul></div><div class="download-footer" data-v-50f125ac><a href="/files/yigui-app-2025/Yigui初赛报告.pdf" download="Yigui初赛报告.pdf" class="download-button-enhanced" data-v-50f125ac><svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-50f125ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-50f125ac></path></svg> 下载初赛报告 </a><span class="file-info" data-v-50f125ac>PDF • 约 2.5MB</span></div></div><div class="download-card" data-v-50f125ac><div class="download-header" data-v-50f125ac><div class="download-icon-large" data-v-50f125ac>📊</div><h5 class="download-title" data-v-50f125ac>复赛技术报告</h5><p class="download-subtitle" data-v-50f125ac>完整实现与深度分析</p></div><div class="download-content" data-v-50f125ac><ul class="download-features" data-v-50f125ac><li data-v-50f125ac>• 完整系统架构设计</li><li data-v-50f125ac>• CoreML 算法实现细节</li><li data-v-50f125ac>• Blender 3D 模型处理</li><li data-v-50f125ac>• 性能优化与测试报告</li></ul></div><div class="download-footer" data-v-50f125ac><a href="/files/yigui-app-2025/Yigui复赛报告.pdf" download="Yigui复赛报告.pdf" class="download-button-enhanced" data-v-50f125ac><svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-50f125ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-50f125ac></path></svg> 下载复赛报告 </a><span class="file-info" data-v-50f125ac>PDF • 约 3.8MB</span></div></div><div class="download-card" data-v-50f125ac><div class="download-header" data-v-50f125ac><div class="download-icon-large" data-v-50f125ac>🎨</div><h5 class="download-title" data-v-50f125ac>产品宣传海报</h5><p class="download-subtitle" data-v-50f125ac>视觉设计与产品展示</p></div><div class="download-content" data-v-50f125ac><ul class="download-features" data-v-50f125ac><li data-v-50f125ac>• 产品核心功能展示</li><li data-v-50f125ac>• 精美视觉设计效果</li><li data-v-50f125ac>• 用户体验流程图</li><li data-v-50f125ac>• 技术亮点总结</li></ul></div><div class="download-footer" data-v-50f125ac><a href="/files/yigui-app-2025/App宣传海报.pdf" download="App宣传海报.pdf" class="download-button-enhanced" data-v-50f125ac><svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-50f125ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-50f125ac></path></svg> 下载宣传海报 </a><span class="file-info" data-v-50f125ac>PDF • 61MB</span></div></div></div></div></div></div>',2)),t("div",Ht,[a[194]||(a[194]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"竞赛成果与荣誉")],-1)),t("div",Kt,[a[192]||(a[192]=l('<div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>竞赛结果与收获</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-8" data-v-50f125ac>在中国高校计算机大赛—移动应用创新赛中，Yigui / 依柜项目凭借其创新的技术方案和优秀的用户体验设计，获得了西南赛区二等奖的优异成绩。这个奖项不仅是对项目技术价值的认可，更是对我个人技术能力和创新思维的肯定。</p><div class="achievement-stats grid grid-cols-1 md:grid-cols-4 gap-6 mt-8" data-v-50f125ac><div class="stat-item" data-v-50f125ac><div class="stat-icon" data-v-50f125ac>🏆</div><h5 class="stat-title" data-v-50f125ac>西南赛区二等奖</h5><p class="stat-desc" data-v-50f125ac>移动应用创新赛</p></div><div class="stat-item" data-v-50f125ac><h5 class="stat-title" data-v-50f125ac>完整实现</h5><p class="stat-desc" data-v-50f125ac>前端+后端+算法</p></div><div class="stat-item" data-v-50f125ac><h5 class="stat-title" data-v-50f125ac>技术创新</h5><p class="stat-desc" data-v-50f125ac>CoreML + Blender</p></div><div class="stat-item" data-v-50f125ac><h5 class="stat-title" data-v-50f125ac>独立完成</h5><p class="stat-desc" data-v-50f125ac>个人项目</p></div></div></div></div>',1)),t("div",Qt,[a[191]||(a[191]=t("div",{class:"info-header text-center mb-8"},[t("h4",null,"获奖证书")],-1)),t("div",Yt,[t("div",{class:"gallery-item max-w-4xl mx-auto",onClick:a[34]||(a[34]=s=>d("/images/projects/yigui-app-2025/西南赛区二等奖证书.jpg","西南赛区二等奖证书"))},[e(i,{src:"/images/projects/yigui-app-2025/西南赛区二等奖证书.jpg",alt:"西南赛区二等奖证书",preset:"photo",class:"feature-image clickable-image rounded-xl border border-gray-200 shadow-2xl w-full",style:{objectFit:"contain"}}),a[190]||(a[190]=l('<div class="certificate-info text-center mt-6" data-v-50f125ac><h5 class="certificate-title" data-v-50f125ac>中国高校计算机大赛—移动应用创新赛</h5><p class="certificate-subtitle" data-v-50f125ac>西南赛区二等奖证书</p><div class="certificate-details mt-4" data-v-50f125ac><span class="detail-item" data-v-50f125ac>🏆 西南赛区奖项</span><span class="detail-item" data-v-50f125ac>📱 移动应用类</span><span class="detail-item" data-v-50f125ac>🎖️ 个人获奖</span></div></div>',1))])])]),a[193]||(a[193]=l('<div class="project-value" data-v-50f125ac><div class="info-header text-center mb-8" data-v-50f125ac><h4 data-v-50f125ac>项目价值与技术贡献</h4></div><div class="value-content max-w-5xl mx-auto" data-v-50f125ac><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-50f125ac><div class="value-column" data-v-50f125ac><h5 class="value-column-title" data-v-50f125ac>🔬 技术创新点</h5><div class="value-details space-y-4" data-v-50f125ac><div class="value-item" data-v-50f125ac><h6 class="value-item-title" data-v-50f125ac>本地机器学习</h6><p class="value-item-desc" data-v-50f125ac>采用 CoreML 实现设备端智能推理，保护用户隐私的同时提供个性化服务</p></div><div class="value-item" data-v-50f125ac><h6 class="value-item-title" data-v-50f125ac>3D 模型处理</h6><p class="value-item-desc" data-v-50f125ac>自学 Blender 并优化 3D 人体模型，实现移动端高性能渲染</p></div><div class="value-item" data-v-50f125ac><h6 class="value-item-title" data-v-50f125ac>参数化设计</h6><p class="value-item-desc" data-v-50f125ac>创建可复现的参数化服装设计系统，避免版权和隐私问题</p></div></div></div><div class="value-column" data-v-50f125ac><h5 class="value-column-title" data-v-50f125ac>💡 产品价值</h5><div class="value-details space-y-4" data-v-50f125ac><div class="value-item" data-v-50f125ac><h6 class="value-item-title" data-v-50f125ac>用户体验创新</h6><p class="value-item-desc" data-v-50f125ac>简化的三步设计流程，让普通用户也能轻松创建个性化服装</p></div><div class="value-item" data-v-50f125ac><h6 class="value-item-title" data-v-50f125ac>技术栈整合</h6><p class="value-item-desc" data-v-50f125ac>前端 SwiftUI + 后端 Ubuntu + 算法 CoreML 的完整技术方案</p></div><div class="value-item" data-v-50f125ac><h6 class="value-item-title" data-v-50f125ac>商业应用潜力</h6><p class="value-item-desc" data-v-50f125ac>可扩展到时尚电商、个性化定制等多个商业应用场景</p></div></div></div></div></div></div>',1))])]),a[199]||(a[199]=l('<div id="project-summary" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>项目总结与展望</h3></div><div class="work-content space-y-10" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header text-center" data-v-50f125ac><h4 data-v-50f125ac>项目复盘与核心收获</h4></div><div class="info-content max-w-4xl mx-auto text-center" data-v-50f125ac><p class="text-lg leading-relaxed mb-8" data-v-50f125ac>把想法一步步落地，是一个不断取舍和打磨的过程。做完这个项目，我更确信：清晰的目标、简洁的流程和可解释的结果，比堆叠概念更重要。我会继续把这套方法打磨好，让产品更稳定，也更贴近真实的人。</p><div class="key-insights grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-v-50f125ac><div class="insight-card" data-v-50f125ac><h5 class="insight-title" data-v-50f125ac>目标导向</h5><p class="insight-desc" data-v-50f125ac>清晰的产品目标<br data-v-50f125ac>比技术炫技更重要</p></div><div class="insight-card" data-v-50f125ac><h5 class="insight-title" data-v-50f125ac>迭代优化</h5><p class="insight-desc" data-v-50f125ac>不断测试和改进<br data-v-50f125ac>才能接近最优解</p></div><div class="insight-card" data-v-50f125ac><h5 class="insight-title" data-v-50f125ac>用户中心</h5><p class="insight-desc" data-v-50f125ac>贴近真实用户需求<br data-v-50f125ac>是产品成功的关键</p></div></div></div></div><div class="growth-journey" data-v-50f125ac><div class="info-header text-center mb-8" data-v-50f125ac><h4 data-v-50f125ac>技术成长历程</h4></div><div class="growth-content max-w-5xl mx-auto" data-v-50f125ac><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-50f125ac><div class="growth-column" data-v-50f125ac><h5 class="growth-column-title" data-v-50f125ac>技能提升</h5><div class="growth-items space-y-4" data-v-50f125ac><div class="growth-item" data-v-50f125ac><h6 class="growth-item-title" data-v-50f125ac>全栈开发能力</h6><p class="growth-item-desc" data-v-50f125ac>从前端 SwiftUI 到后端 Ubuntu 部署，掌握了完整的产品开发链路</p></div><div class="growth-item" data-v-50f125ac><h6 class="growth-item-title" data-v-50f125ac>机器学习应用</h6><p class="growth-item-desc" data-v-50f125ac>学会了将 CoreML 集成到实际产品中，实现智能化用户体验</p></div><div class="growth-item" data-v-50f125ac><h6 class="growth-item-title" data-v-50f125ac>3D 图形处理</h6><p class="growth-item-desc" data-v-50f125ac>自学 Blender 并优化 3D 模型，在性能与质量间找到平衡</p></div></div></div><div class="growth-column" data-v-50f125ac><h5 class="growth-column-title" data-v-50f125ac>思维转变</h5><div class="growth-items space-y-4" data-v-50f125ac><div class="growth-item" data-v-50f125ac><h6 class="growth-item-title" data-v-50f125ac>产品思维</h6><p class="growth-item-desc" data-v-50f125ac>从技术驱动转向用户需求驱动，更注重用户体验和商业价值</p></div><div class="growth-item" data-v-50f125ac><h6 class="growth-item-title" data-v-50f125ac>系统设计</h6><p class="growth-item-desc" data-v-50f125ac>学会了模块化设计和系统架构，提高了代码的可维护性</p></div><div class="growth-item" data-v-50f125ac><h6 class="growth-item-title" data-v-50f125ac>问题解决</h6><p class="growth-item-desc" data-v-50f125ac>面对复杂技术难题时，学会了分解问题和寻找最优解决方案</p></div></div></div></div></div></div><div class="future-outlook" data-v-50f125ac><div class="info-header text-center mb-8" data-v-50f125ac><h4 data-v-50f125ac>未来发展方向</h4></div><div class="outlook-content max-w-4xl mx-auto" data-v-50f125ac><div class="outlook-grid grid grid-cols-1 md:grid-cols-2 gap-8" data-v-50f125ac><div class="outlook-card" data-v-50f125ac><div class="outlook-header" data-v-50f125ac><h5 class="outlook-title" data-v-50f125ac>技术深度</h5></div><div class="outlook-details" data-v-50f125ac><ul class="outlook-list" data-v-50f125ac><li data-v-50f125ac>深入学习计算机视觉和深度学习算法</li><li data-v-50f125ac>探索更先进的 3D 渲染和动画技术</li><li data-v-50f125ac>研究大规模系统的性能优化方法</li><li data-v-50f125ac>关注 AR/VR 在时尚领域的应用前景</li></ul></div></div><div class="outlook-card" data-v-50f125ac><div class="outlook-header" data-v-50f125ac><h5 class="outlook-title" data-v-50f125ac>产品愿景</h5></div><div class="outlook-details" data-v-50f125ac><ul class="outlook-list" data-v-50f125ac><li data-v-50f125ac>打造更智能的个性化推荐算法</li><li data-v-50f125ac>扩展到更多服装类型和风格选择</li><li data-v-50f125ac>集成社交分享和社区互动功能</li><li data-v-50f125ac>探索与时尚品牌的商业合作模式</li></ul></div></div></div><div class="final-message text-center mt-10" data-v-50f125ac><p class="text-lg leading-relaxed text-gray-600" data-v-50f125ac>这个项目不仅是我技术能力的展示，更是我对创新思维和产品理念的实践。我相信，通过不断学习和实践，能够创造出更多有价值的产品，为用户带来更好的体验。</p></div></div></div></div></div>',1)),t("div",{class:"back-to-overview-section"},[t("button",{onClick:w,class:"back-overview-button"},a[195]||(a[195]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),t("span",null,"返回项目概览",-1)]))])])):y("",!0),m.value==="nus-sws-2024"?(r(),v("section",Xt,[t("div",{class:"back-button-container"},[t("button",{onClick:w,class:"back-button"},a[200]||(a[200]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),f(" 返回项目概览 ",-1)]))]),D(t("aside",Jt,[t("div",Zt,[a[201]||(a[201]=t("div",{class:"floating-nav-title"},"导航",-1)),t("nav",as,[t("a",{href:"#team-info",onClick:a[35]||(a[35]=s=>n("team-info",s)),class:o(["floating-nav-card",{active:c.value==="team-info"}])}," 团队信息 ",2),t("a",{href:"#team-work",onClick:a[36]||(a[36]=s=>n("team-work",s)),class:o(["floating-nav-card",{active:c.value==="team-work"}])}," 团队作品 ",2),t("a",{href:"#individual-work",onClick:a[37]||(a[37]=s=>n("individual-work",s)),class:o(["floating-nav-card",{active:c.value==="individual-work"}])}," 个人作品 ",2),t("a",{href:"#achievements",onClick:a[38]||(a[38]=s=>n("achievements",s)),class:o(["floating-nav-card",{active:c.value==="achievements"}])}," 项目成果 ",2),t("a",{href:"#project-summary",onClick:a[39]||(a[39]=s=>n("project-summary",s)),class:o(["floating-nav-card",{active:c.value==="project-summary"}])}," 项目总结 ",2)])])],512),[[I,m.value==="nus-sws-2024"]]),t("div",ts,[t("div",ss,[a[203]||(a[203]=l('<div class="hero-text" data-v-50f125ac><span class="project-date" data-v-50f125ac>2024年6月29日 - 7月20日</span><h1 class="hero-title" data-v-50f125ac>NUS SOC SWS 2024</h1><h2 class="hero-subtitle" data-v-50f125ac>Designing Interaction Interfaces: UI/UX in the Digital World</h2><div class="hero-badges" data-v-50f125ac><span class="badge badge-primary" data-v-50f125ac>UI/UX设计</span><span class="badge badge-secondary" data-v-50f125ac>Figma原型</span></div></div>',1)),t("div",{class:"hero-image",onClick:a[40]||(a[40]=s=>d("/images/projects/nus-sws-2024/cover.png","NUS SOC SWS 2024项目封面图"))},[e(i,{src:"/images/projects/nus-sws-2024/cover.png",alt:"NUS SOC SWS 2024项目封面",preset:"hero",class:"cover-image clickable-image",style:{objectFit:"contain"}}),a[202]||(a[202]=t("div",{class:"image-overlay"},[t("span",{class:"overlay-text"},"点击查看大图")],-1))])])]),a[225]||(a[225]=l('<div id="team-info" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>团队信息</h3></div><div class="team-info-content" data-v-50f125ac><div class="team-info-grid" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>指导教授</h4></div><div class="info-content" data-v-50f125ac><p data-v-50f125ac>Bimlesh Wadhwa（Professor of NUS School of Computing）</p></div><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>TA/助教</h4></div><div class="info-content" data-v-50f125ac><p data-v-50f125ac>Melanie Khin Jing Hong (NUS)</p><p data-v-50f125ac>Charisma Kausar (NUS)</p></div></div><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>团队成员</h4></div><ul class="team-members-list" data-v-50f125ac><li data-v-50f125ac>我 <span class="leader-badge" data-v-50f125ac>队长</span> - 团队协调、注册登录模块、聊天功能</li><li data-v-50f125ac>Liang Zhuoran（UESTC） - 主页、好友动态功能制作</li><li data-v-50f125ac>YANG Jilin（UESTC） - 地图功能、导航功能</li><li data-v-50f125ac>LI Jingyan（NYU） - 海报制作</li><li data-v-50f125ac>JIN Hanze（UNNC） - 团队网页制作</li><li data-v-50f125ac>ZHAO Chengcheng（UESTC） - 市场调研与需求分析</li></ul></div></div></div></div>',1)),t("div",es,[a[210]||(a[210]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"团队作品：LiNkUS")],-1)),t("div",is,[a[209]||(a[209]=l('<div class="work-description" data-v-50f125ac><p data-v-50f125ac> LiNkUS是我们团队设计的校园社交应用原型，专为NUS学生打造的综合性社交平台。应用集成了实时地图聊天、好友动态分享、校园活动发布等核心功能，旨在增强校园内学生间的互动交流。 </p><p data-v-50f125ac> 应用采用现代化的UI设计语言，注重用户体验的流畅性和直观性。通过深入的用户研究和多轮迭代优化，我们打造了一个既实用又美观的社交产品原型。 </p><div class="prototype-links" data-v-50f125ac><a href="https://www.figma.com/proto/K79KSdRZ2iqkICTTFgVhOq/FINAL-FINAL-VERSION?node-id=31-4086&amp;p=f&amp;m=draw&amp;scaling=scale-down&amp;content-scaling=fixed&amp;page-id=0%3A1&amp;starting-point-node-id=31%3A4086&amp;show-proto-sidebar=1&amp;t=vBrl6Grze1tzWgMv-1" target="_blank" class="prototype-link" data-v-50f125ac> 查看Figma原型 </a><span class="access-note" data-v-50f125ac>（密码：90210）</span><a href="https://jinhz0531.wixsite.com/my-site-5" target="_blank" class="prototype-link" data-v-50f125ac> 查看宣传网站 </a></div></div>',1)),t("div",ds,[t("div",ls,[t("div",cs,[t("div",{class:"gallery-item",onClick:a[41]||(a[41]=s=>d("/images/projects/nus-sws-2024/team-figma-prototype.png","LiNkUS Figma原型设计"))},[e(i,{src:"/images/projects/nus-sws-2024/team-figma-prototype.png",alt:"LiNkUS Figma原型",preset:"photo",class:"prototype-image",style:{objectFit:"contain"}}),a[204]||(a[204]=t("span",{class:"gallery-caption"},"LiNkUS Figma原型设计",-1))])]),t("div",os,[t("div",{class:"gallery-item",onClick:a[42]||(a[42]=s=>d("/images/projects/nus-sws-2024/team-welcome.png","LiNkUS欢迎页面"))},[e(i,{src:"/images/projects/nus-sws-2024/team-welcome.png",alt:"LiNkUS欢迎页面",preset:"photo",class:"team-gallery-image",style:{objectFit:"contain"}}),a[205]||(a[205]=t("span",{class:"gallery-caption"},"LiNkUS欢迎页面",-1))]),t("div",{class:"gallery-item",onClick:a[43]||(a[43]=s=>d("/images/projects/nus-sws-2024/team-map.png","LiNkUS校园地图功能"))},[e(i,{src:"/images/projects/nus-sws-2024/team-map.png",alt:"LiNkUS地图功能",preset:"photo",class:"team-gallery-image",style:{objectFit:"contain"}}),a[206]||(a[206]=t("span",{class:"gallery-caption"},"LiNkUS校园地图功能",-1))]),t("div",{class:"gallery-item",onClick:a[44]||(a[44]=s=>d("/images/projects/nus-sws-2024/team-chat.png","LiNkUS实时聊天功能"))},[e(i,{src:"/images/projects/nus-sws-2024/team-chat.png",alt:"LiNkUS聊天功能",preset:"photo",class:"team-gallery-image",style:{objectFit:"contain"}}),a[207]||(a[207]=t("span",{class:"gallery-caption"},"LiNkUS实时聊天功能",-1))]),t("div",{class:"gallery-item",onClick:a[45]||(a[45]=s=>d("/images/projects/nus-sws-2024/team-feed.png","LiNkUS好友动态功能"))},[e(i,{src:"/images/projects/nus-sws-2024/team-feed.png",alt:"LiNkUS动态功能",preset:"photo",class:"team-gallery-image",style:{objectFit:"contain"}}),a[208]||(a[208]=t("span",{class:"gallery-caption"},"LiNkUS好友动态功能",-1))])])])])])]),t("div",ns,[a[214]||(a[214]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"个人作品：Individual Wrap")],-1)),t("div",rs,[a[213]||(a[213]=t("div",{class:"work-description"},[t("p",null," Individual Wrap是我参考Spotify年度总结风格设计的个人项目回顾网站。通过数据可视化的方式，生动地展示了我在SWS项目中的学习历程、时间投入、技能成长和项目亮点。 "),t("p",null," 设计中融入了现代化的渐变色彩、动态图表和个性化的布局设计，既体现了我对UI设计的理解，也完整记录了这次宝贵的学习经历。 "),t("div",{class:"prototype-links"},[t("a",{href:"https://www.figma.com/proto/N6O73v3gWnRRq7EnM1ewIn/Individual-Wrap?node-id=29-2&p=f&t=Rrs3pCcDmYXxDGfK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A20&show-proto-sidebar=1",target:"_blank",class:"prototype-link"}," 查看个人作品原型 ")])],-1)),t("div",vs,[t("div",ps,[t("div",{class:"gallery-item",onClick:a[46]||(a[46]=s=>d("/images/projects/nus-sws-2024/individual-prototype.png","Individual Wrap Figma原型图"))},[e(i,{src:"/images/projects/nus-sws-2024/individual-prototype.png",alt:"Individual Wrap原型",preset:"project",class:"individual-image",style:{objectFit:"contain"}}),a[211]||(a[211]=t("span",{class:"gallery-caption"},"Individual Wrap Figma原型图",-1))]),t("div",{class:"gallery-item",onClick:a[47]||(a[47]=s=>d("/images/projects/nus-sws-2024/individual-homepage.png","Individual Wrap首页设计"))},[e(i,{src:"/images/projects/nus-sws-2024/individual-homepage.png",alt:"Individual Wrap首页",preset:"project",class:"individual-image",style:{objectFit:"contain"}}),a[212]||(a[212]=t("span",{class:"gallery-caption"},"Individual Wrap首页设计",-1))])])])])]),t("div",fs,[a[219]||(a[219]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"项目成果")],-1)),t("div",ms,[t("div",gs,[t("div",us,[a[215]||(a[215]=t("h4",null,"团队荣誉",-1)),a[216]||(a[216]=t("p",null,"团队作品在10个小组中获得前三名",-1)),t("div",hs,[t("div",{class:"gallery-item",onClick:a[48]||(a[48]=s=>d("/images/projects/nus-sws-2024/Top Project.png","团队获奖证书"))},[e(i,{src:"/images/projects/nus-sws-2024/Top Project.png",alt:"团队获奖证书",preset:"photo",class:"award-certificate-image",style:{objectFit:"contain"}})]),M.value?(r(),v("a",ys," 下载证书 ")):y("",!0)])]),t("div",bs,[a[217]||(a[217]=t("h4",null,"个人成绩",-1)),a[218]||(a[218]=t("p",null,"获得A+个人表现评价",-1)),t("div",ks,[t("div",{class:"gallery-item",onClick:a[49]||(a[49]=s=>d("/images/projects/nus-sws-2024/个人A+.png","个人成绩证书"))},[e(i,{src:"/images/projects/nus-sws-2024/个人A+.png",alt:"个人成绩证书",preset:"photo",class:"award-certificate-image",style:{objectFit:"contain"}})]),M.value?(r(),v("a",ws," 下载证书 ")):y("",!0)])])])])]),t("div",_s,[a[223]||(a[223]=t("h3",{class:"section-title"},"项目总结",-1)),t("div",xs,[a[222]||(a[222]=t("p",{class:"summary-description"}," 这次NUS SOC SWS 2024项目给了我一次宝贵的国际化学习体验。 通过三周的密集学习，我不仅掌握了UI/UX设计的核心技能，更重要的是学会了如何在多元文化的团队中有效协作， 如何在压力下保持质量，以及如何将理论知识转化为实际的产品原型。 这段经历将成为我学术和职业发展路上的重要里程碑。 ",-1)),t("div",js,[t("div",{class:"photo-item",onClick:a[50]||(a[50]=s=>d("/images/projects/nus-sws-2024/correct-personal-photo.png","项目期间个人照片"))},[e(i,{src:"/images/projects/nus-sws-2024/correct-personal-photo.png",alt:"项目期间照片",preset:"photo",class:"achievement-photo",style:{objectFit:"contain"}}),a[220]||(a[220]=t("span",{class:"gallery-caption"},"项目期间个人照片",-1))]),t("div",{class:"photo-item",onClick:a[51]||(a[51]=s=>d("/images/projects/nus-sws-2024/correct-classroom-photo.png","课堂学习环境"))},[e(i,{src:"/images/projects/nus-sws-2024/correct-classroom-photo.png",alt:"课堂环境",preset:"photo",class:"achievement-photo",style:{objectFit:"contain"}}),a[221]||(a[221]=t("span",{class:"gallery-caption"},"课堂学习环境",-1))])])])]),t("div",{class:"back-to-overview-section"},[t("button",{onClick:w,class:"back-overview-button"},a[224]||(a[224]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),t("span",null,"返回项目概览",-1)]))])])):y("",!0),m.value==="mengsheng-2024"?(r(),v("section",Cs,[t("div",{class:"back-button-container"},[t("button",{onClick:w,class:"back-button"},a[226]||(a[226]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),f(" 返回项目概览 ",-1)]))]),D(t("aside",Ss,[t("div",As,[a[227]||(a[227]=t("div",{class:"floating-nav-title"},"导航",-1)),t("nav",Ds,[t("a",{href:"#team-info",onClick:a[52]||(a[52]=s=>n("team-info",s)),class:o(["floating-nav-card",{active:c.value==="team-info"}])}," 团队信息 ",2),t("a",{href:"#project-background",onClick:a[53]||(a[53]=s=>n("project-background",s)),class:o(["floating-nav-card",{active:c.value==="project-background"}])}," 项目背景 ",2),t("a",{href:"#project-overview",onClick:a[54]||(a[54]=s=>n("project-overview",s)),class:o(["floating-nav-card",{active:c.value==="project-overview"}])}," 解决方案 ",2),t("a",{href:"#system-design",onClick:a[55]||(a[55]=s=>n("system-design",s)),class:o(["floating-nav-card",{active:c.value==="system-design"}])}," 系统设计 ",2),t("a",{href:"#software-algorithm",onClick:a[56]||(a[56]=s=>n("software-algorithm",s)),class:o(["floating-nav-card",{active:c.value==="software-algorithm"}])}," 算法仿真 ",2),t("a",{href:"#hardware-implementation",onClick:a[57]||(a[57]=s=>n("hardware-implementation",s)),class:o(["floating-nav-card",{active:c.value==="hardware-implementation"}])}," 硬件实现 ",2),t("a",{href:"#testing-results",onClick:a[58]||(a[58]=s=>n("testing-results",s)),class:o(["floating-nav-card",{active:c.value==="testing-results"}])}," 测试结果 ",2),t("a",{href:"#project-summary",onClick:a[59]||(a[59]=s=>n("project-summary",s)),class:o(["floating-nav-card",{active:c.value==="project-summary"}])}," 项目总结 ",2)])])],512),[[I,m.value==="mengsheng-2024"]]),t("div",Is,[t("div",Ms,[a[229]||(a[229]=l('<div class="hero-text" data-v-50f125ac><span class="project-date" data-v-50f125ac>2024年9月</span><h1 class="hero-title" data-v-50f125ac>&quot;盟升杯&quot;电子设计竞赛</h1><h2 class="hero-subtitle" data-v-50f125ac>智能声源识别定位系统</h2><div class="hero-badges" data-v-50f125ac><span class="badge badge-accent" data-v-50f125ac>硬件系统开发</span><span class="badge badge-info" data-v-50f125ac>STM32编程</span><span class="badge badge-secondary" data-v-50f125ac>语音控制</span></div></div>',1)),t("div",{class:"hero-image",onClick:a[60]||(a[60]=s=>d("/images/projects/mengsheng-2024/cover.jpg","盟升杯电子设计竞赛项目封面"))},[e(i,{src:"/images/projects/mengsheng-2024/cover.jpg",alt:"盟升杯电子设计竞赛项目封面",preset:"hero",class:"cover-image clickable-image",style:{objectFit:"contain"}}),a[228]||(a[228]=t("div",{class:"image-overlay"},[t("span",{class:"overlay-text"},"点击查看大图")],-1))])])]),a[277]||(a[277]=l('<div id="team-info" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>团队信息</h3></div><div class="team-info-content" data-v-50f125ac><div class="team-info-grid" data-v-50f125ac><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>指导方</h4></div><div class="info-content" data-v-50f125ac><p data-v-50f125ac>电子科学与工程学院科协</p><p data-v-50f125ac>盟升电子公司专家</p></div></div><div class="info-card" data-v-50f125ac><div class="info-header" data-v-50f125ac><h4 data-v-50f125ac>团队成员</h4></div><ul class="team-members-list" data-v-50f125ac><li data-v-50f125ac>我 <span class="leader-badge" data-v-50f125ac>队长</span></li><li data-v-50f125ac>迪里亚尔江·阿司木江（计算机科学与工程学院）- 算法优化</li><li data-v-50f125ac>热法提·买买提热夏提（电子科学与工程学院） - 电路焊接与调试</li></ul></div></div></div></div>',1)),t("div",Ls,[a[232]||(a[232]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"项目背景与要求")],-1)),t("div",Ps,[a[231]||(a[231]=l('<div class="background-main-content" data-v-50f125ac><div class="background-description" data-v-50f125ac><p data-v-50f125ac> 本项目源于2024年盟升杯高年级组电子设计竞赛D题：&quot;智能声源识别定位系统&quot;。 竞赛要求设计并制作一个能够识别和定位声源的智能系统，在预设的测量区域内实现精确的声源定位与语音识别功能。 </p><div class="task-requirements" data-v-50f125ac><h4 data-v-50f125ac>具体任务要求</h4><ul class="requirements-list" data-v-50f125ac><li data-v-50f125ac><strong data-v-50f125ac>硬件约束：</strong>麦克风阵列形式可自行设计，但麦克风个数不能超过5个，整个声源定位系统的尺寸不能超过测量区域</li><li data-v-50f125ac><strong data-v-50f125ac>定位功能：</strong>系统能够在5个预设区域(A、B、C、D、E)内准确识别声源位置，定位误差不超过±5cm</li><li data-v-50f125ac><strong data-v-50f125ac>语音识别：</strong>系统设置为&quot;识别模式&quot;时，能够识别区分4条指令：&quot;打开灯光&quot;、&quot;关闭灯光&quot;、&quot;打开空调&quot;、&quot;关闭空调&quot;</li><li data-v-50f125ac><strong data-v-50f125ac>信号输入：</strong>指令通过手机、蓝牙音箱播放或自制播放设备输入</li><li data-v-50f125ac><strong data-v-50f125ac>结果显示：</strong>识别结果通过液晶屏幕在系统端进行实时显示</li></ul></div><div class="requirements-docs" data-v-50f125ac><h4 data-v-50f125ac>竞赛文档</h4><a href="/images/projects/mengsheng-2024/project-requirements.pdf" target="_blank" class="project-doc-button" data-v-50f125ac> 📄 查看完整题目要求 </a></div></div></div>',1)),t("div",Rs,[t("div",Ts,[t("div",{class:"gallery-item",onClick:a[61]||(a[61]=s=>d("/images/projects/mengsheng-2024/measurement-area.png","系统测量区域俯视图"))},[e(i,{src:"/images/projects/mengsheng-2024/measurement-area.png",alt:"系统测量区域俯视图",preset:"photo",class:"area-diagram-large",style:{objectFit:"contain"}}),a[230]||(a[230]=t("span",{class:"gallery-caption"},"系统测量区域俯视图 - 5个预设区域(A、B、C、D、E)",-1))])])])])]),a[278]||(a[278]=l('<div id="project-overview" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>解决方案与成果</h3></div><div class="solution-content" data-v-50f125ac><div class="solution-description" data-v-50f125ac><p data-v-50f125ac> 针对竞赛要求，我们设计了基于STM32H750微控制器的智能声源识别定位系统。 系统采用TDOA（时差定位）算法作为核心定位技术，通过四麦克风矩形阵列实现高精度声源定位， 并集成ASR-PRO语音识别模块实现智能语音控制功能。 </p><p data-v-50f125ac> 经过严格的理论仿真、硬件调试和系统测试，最终实现了定位精度±2cm的技术指标， 超越了竞赛要求的±5cm标准，并在2024年盟升杯电子设计竞赛中获得三等奖的优异成绩。 </p><div class="solution-highlights" data-v-50f125ac><h4 data-v-50f125ac>核心技术方案</h4><div class="solution-grid" data-v-50f125ac><div class="solution-item" data-v-50f125ac><div class="solution-icon" data-v-50f125ac>🎯</div><h5 data-v-50f125ac>TDOA定位算法</h5><p data-v-50f125ac>基于时差原理，实现±2cm高精度定位，超越竞赛±5cm要求</p></div><div class="solution-item" data-v-50f125ac><div class="solution-icon" data-v-50f125ac>🎤</div><h5 data-v-50f125ac>四麦克风阵列</h5><p data-v-50f125ac>40cm×20cm矩形布局，优化几何结构提升定位精度</p></div><div class="solution-item" data-v-50f125ac><div class="solution-icon" data-v-50f125ac>🗣️</div><h5 data-v-50f125ac>语音识别集成</h5><p data-v-50f125ac>离线识别4条智能家居控制指令，响应时间&lt;100ms</p></div><div class="solution-item" data-v-50f125ac><div class="solution-icon" data-v-50f125ac>⚡</div><h5 data-v-50f125ac>实时信号处理</h5><p data-v-50f125ac>STM32H750 400MHz处理器，确保系统实时性能</p></div></div></div></div></div></div><div class="github-section" data-v-50f125ac><div class="github-content" data-v-50f125ac><div class="github-info" data-v-50f125ac><h4 data-v-50f125ac>完整源码</h4><p data-v-50f125ac>由于代码文件较多且结构复杂，完整的软件源码已上传至GitHub仓库，包含Keil代码、设计报告、MATLAB仿真代码、Python分析代码等。</p></div><a href="https://github.com/yourusername/mengsheng-sound-localization" target="_blank" class="github-repo-btn" data-v-50f125ac><svg class="github-icon" fill="currentColor" viewBox="0 0 24 24" data-v-50f125ac><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-50f125ac></path></svg> 查看完整源码 </a></div></div>',2)),t("div",Os,[a[235]||(a[235]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"系统架构设计")],-1)),t("div",Fs,[a[234]||(a[234]=l('<div class="work-description" data-v-50f125ac><p data-v-50f125ac> 系统采用模块化设计思想，分为硬件采集层、算法处理层和应用控制层三个主要层次。 硬件层负责声音信号的采集和预处理，算法层实现TDOA定位计算，应用层提供用户交互和设备控制功能。 </p><div class="system-modules" data-v-50f125ac><div class="module-item" data-v-50f125ac><h5 data-v-50f125ac>信号采集模块</h5><p data-v-50f125ac>四个MAX9814麦克风构成矩形阵列，配合AD7606高精度ADC实现多通道同步采集</p></div><div class="module-item" data-v-50f125ac><h5 data-v-50f125ac>数据处理模块</h5><p data-v-50f125ac>STM32H750负责实时信号处理，运行TDOA算法计算声源位置坐标</p></div><div class="module-item" data-v-50f125ac><h5 data-v-50f125ac>语音识别模块</h5><p data-v-50f125ac>ASR-PRO模块实现语音命令识别，支持灯光、空调等设备的语音控制</p></div></div></div>',1)),t("div",Es,[t("div",{class:"gallery-item",onClick:a[62]||(a[62]=s=>d("/images/projects/mengsheng-2024/architecture.png","系统整体架构图"))},[e(i,{src:"/images/projects/mengsheng-2024/architecture.png",alt:"系统整体架构图",preset:"photo",class:"architecture-image",style:{objectFit:"contain"}}),a[233]||(a[233]=t("span",{class:"gallery-caption"},"系统整体架构图",-1))])])])]),t("div",Bs,[a[248]||(a[248]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"算法设计与仿真")],-1)),t("div",Us,[a[247]||(a[247]=t("div",{class:"algorithm-description"},[t("p",null," 在进行硬件实现之前，首先通过Python分析了不同语音指令的信号特征，然后通过MATLAB仿真验证了TDOA（时差定位）算法的可行性， 最后设计了ASR-PRO语音识别模块的控制逻辑。这一套完整的算法设计与仿真为硬件实现奠定了坚实的理论基础。 ")],-1)),e(h,{title:"Python声音信号分析",description:"使用librosa库对四条语音指令进行频域分析和特征提取，为后续算法设计提供数据支撑",code:Si,language:"python",fileName:"signal_analysis.py",complexity:"支持多种音频格式"}),t("div",Ns,[a[237]||(a[237]=t("h4",null,"Python声音信号分析结果",-1)),a[238]||(a[238]=t("div",{class:"analysis-description"},[t("p",null,' 通过Python的librosa库对"打开灯光"、"关闭灯光"、"打开空调"、"关闭空调"四条指令进行了完整的信号特征分析。 分析结果显示了不同指令在频域上的特征差异，为语音识别算法的参数调优和TDOA定位算法的设计提供了重要依据。 ')],-1)),t("div",$s,[t("div",{class:"gallery-item",onClick:a[63]||(a[63]=s=>d("/images/projects/mengsheng-2024/python-analysis-result.png","Python声音信号分析结果图"))},[e(i,{src:"/images/projects/mengsheng-2024/python-analysis-result.png",alt:"Python声音信号分析结果",preset:"photo",class:"analysis-image",style:{objectFit:"contain"}}),a[236]||(a[236]=t("span",{class:"gallery-caption"},"Python声音信号分析结果 - 四条指令的频域特征对比",-1))])])]),e(h,{title:"TDOA声源定位算法仿真",description:"基于时差定位原理的核心算法实现，使用最小化误差的优化方法估计声源位置",code:ji,language:"matlab",fileName:"tdoa_localization.m",complexity:"时间复杂度: O(n)","github-url":"https://github.com/yourusername/project"}),t("div",qs,[a[241]||(a[241]=t("h4",null,"MATLAB仿真验证结果",-1)),a[242]||(a[242]=t("div",{class:"simulation-description"},[t("p",null," 通过MATLAB进行了大量的仿真验证，测试了不同声源位置下的定位精度。 仿真结果表明，TDOA算法在理想条件下能够实现±2cm的定位精度， 完全满足竞赛要求的±5cm指标。 ")],-1)),t("div",Vs,[t("div",{class:"gallery-item",onClick:a[64]||(a[64]=s=>d("/images/projects/mengsheng-2024/simulation-1.png","MATLAB仿真结果1 - 区域A声源定位"))},[e(i,{src:"/images/projects/mengsheng-2024/simulation-1.png",alt:"随机声源仿真结果1",preset:"photo",class:"simulation-image",style:{objectFit:"contain"}}),a[239]||(a[239]=t("span",{class:"gallery-caption"},"仿真结果1 - 区域A声源定位验证",-1))]),t("div",{class:"gallery-item",onClick:a[65]||(a[65]=s=>d("/images/projects/mengsheng-2024/simulation-2.png","MATLAB仿真结果2 - 区域E声源定位"))},[e(i,{src:"/images/projects/mengsheng-2024/simulation-2.png",alt:"随机声源仿真结果2",preset:"photo",class:"simulation-image",style:{objectFit:"contain"}}),a[240]||(a[240]=t("span",{class:"gallery-caption"},"仿真结果2 - 区域E声源定位验证",-1))])]),a[243]||(a[243]=t("div",{class:"simulation-analysis"},[t("h5",null,"仿真分析总结"),t("ul",null,[t("li",null,"在5个预设区域内进行了100次随机声源定位测试"),t("li",null,"平均定位误差：1.8cm，最大误差：3.2cm"),t("li",null,"算法收敛时间：平均15ms，满足实时性要求"),t("li",null,"在噪声环境下（SNR>20dB）仍能保持较高精度")])],-1))]),e(h,{title:"ASR-PRO语音识别控制",description:"语音识别模块的核心控制代码，实现语音命令到设备控制的转换",code:Ci,language:"cpp",fileName:"asr_control.cpp",complexity:"实时响应 < 100ms"}),t("div",zs,[a[245]||(a[245]=t("h4",null,"ASR-PRO代码架构图",-1)),a[246]||(a[246]=t("div",{class:"code-diagram-description"},[t("p",null," ASR-PRO语音识别模块采用状态机设计模式，通过硬件中断处理语音识别结果， 实现了高效的语音命令解析和设备控制逻辑。 ")],-1)),t("div",Gs,[t("div",{class:"gallery-item",onClick:a[66]||(a[66]=s=>d("/images/projects/mengsheng-2024/asr-code-diagram.png","ASR-PRO代码架构流程图"))},[e(i,{src:"/images/projects/mengsheng-2024/asr-code-diagram.png",alt:"ASR-PRO代码架构图",preset:"photo",class:"code-diagram-image",style:{objectFit:"contain"}}),a[244]||(a[244]=t("span",{class:"gallery-caption"},"ASR-PRO语音识别控制流程图",-1))])])])])]),t("div",Ws,[a[267]||(a[267]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"硬件设计与实现")],-1)),t("div",Hs,[a[265]||(a[265]=t("div",{class:"hardware-description"},[t("p",null," 硬件系统以STM32H750为核心，集成了高精度ADC、麦克风阵列、语音识别模块等关键组件。 电路设计充分考虑了信号完整性和噪声抑制，确保声音信号的高质量采集。 "),t("p",null," 系统采用四麦克风矩形阵列布局，通过精确的时间同步和信号处理， 实现对声源位置的高精度定位。各硬件模块经过严格的电磁兼容性设计， 确保在复杂电磁环境下的稳定工作。 ")],-1)),t("div",Ks,[a[251]||(a[251]=t("h4",null,"核心处理器模块",-1)),t("div",Qs,[t("div",Ys,[t("div",{class:"gallery-item",onClick:a[67]||(a[67]=s=>d("/images/projects/mengsheng-2024/stm32-board.png","STM32H750核心板"))},[e(i,{src:"/images/projects/mengsheng-2024/stm32-board.png",alt:"STM32H750实物图",preset:"photo",class:"hardware-image",style:{objectFit:"contain"}}),a[249]||(a[249]=t("span",{class:"gallery-caption"},"STM32H750核心板 - 400MHz Cortex-M7",-1))])]),a[250]||(a[250]=t("div",{class:"hardware-specs"},[t("ul",null,[t("li",null,"STM32H750VBT6 微控制器，主频400MHz"),t("li",null,"Cortex-M7内核，支持浮点运算单元"),t("li",null,"128KB Flash + 1MB RAM"),t("li",null,"丰富的外设接口：SPI、I2C、UART、ADC等")])],-1))])]),t("div",Xs,[a[254]||(a[254]=t("h4",null,"声音采集与处理模块",-1)),t("div",Js,[a[253]||(a[253]=t("div",{class:"hardware-specs"},[t("ul",null,[t("li",null,"支持离线语音识别，响应时间<100ms"),t("li",null,"内置降噪算法，适应复杂声学环境"),t("li",null,"可自定义命令词，支持中文识别"),t("li",null,"集成麦克风阵列接口")])],-1)),t("div",Zs,[t("div",{class:"gallery-item",onClick:a[68]||(a[68]=s=>d("/images/projects/mengsheng-2024/asr-pro-module.png","ASR-PRO语音识别模块"))},[e(i,{src:"/images/projects/mengsheng-2024/asr-pro-module.png",alt:"ASR-PRO语音识别模块",preset:"photo",class:"hardware-image",style:{objectFit:"contain"}}),a[252]||(a[252]=t("span",{class:"gallery-caption"},"ASR-PRO语音识别模块",-1))])])])]),t("div",ae,[a[257]||(a[257]=t("h4",null,"数模转换器模块",-1)),t("div",te,[t("div",se,[t("div",{class:"gallery-item",onClick:a[69]||(a[69]=s=>d("/images/projects/mengsheng-2024/ad7606-hardware.png","AD7606数模转换器"))},[e(i,{src:"/images/projects/mengsheng-2024/ad7606-hardware.png",alt:"AD7606实物图",preset:"photo",class:"hardware-image",style:{objectFit:"contain"}}),a[255]||(a[255]=t("span",{class:"gallery-caption"},"AD7606高精度ADC模块",-1))])]),a[256]||(a[256]=t("div",{class:"hardware-specs"},[t("ul",null,[t("li",null,"16位分辨率，8通道同步采样ADC"),t("li",null,"最高采样率200kSPS，满足声音信号处理需求"),t("li",null,"内置可编程增益放大器，增益范围1-10倍"),t("li",null,"差分输入设计，有效抑制共模噪声"),t("li",null,"SPI/并行接口，便于与STM32连接")])],-1))])]),t("div",ee,[a[259]||(a[259]=t("h4",null,"麦克风阵列系统",-1)),t("div",ie,[t("div",{class:"gallery-item",onClick:a[70]||(a[70]=s=>d("/images/projects/mengsheng-2024/mic-array-wiring.png","麦克风矩阵接线图"))},[e(i,{src:"/images/projects/mengsheng-2024/mic-array-wiring.png",alt:"麦克风矩阵实际接线图",preset:"photo",class:"wiring-diagram",style:{objectFit:"contain"}}),a[258]||(a[258]=t("span",{class:"gallery-caption"},"四麦克风矩形阵列接线图",-1))])]),a[260]||(a[260]=l('<div class="mic-array-description" data-v-50f125ac><p data-v-50f125ac> 采用四麦克风矩形阵列布局，阵列尺寸为40cm×20cm。 通过精确的几何布局和时间同步，实现高精度的TDOA计算。 每个麦克风均经过精确的相位校准，确保信号采集的一致性。 </p><div class="array-specs" data-v-50f125ac><div class="spec-item" data-v-50f125ac><strong data-v-50f125ac>阵列尺寸：</strong>40cm × 20cm </div><div class="spec-item" data-v-50f125ac><strong data-v-50f125ac>麦克风数量：</strong>4个 (矩形布局) </div><div class="spec-item" data-v-50f125ac><strong data-v-50f125ac>采样率：</strong>20kHz </div><div class="spec-item" data-v-50f125ac><strong data-v-50f125ac>定位精度：</strong>±2cm </div></div></div>',1))]),a[266]||(a[266]=l('<div class="hardware-section" data-v-50f125ac><h4 data-v-50f125ac>外框的3D建模与打印</h4><div class="modeling-description" data-v-50f125ac><p data-v-50f125ac> 为了保护电路板和提供美观的外观，我们使用SOLIDWORKS进行了外框架的3D建模设计。 设计考虑了麦克风阵列的布局、电路板固定、散热通风以及用户操作的便利性。 完成建模后，我们在校园内使用免费的3D打印服务制作了外框架。 </p></div><div class="modeling-video-section" data-v-50f125ac><div class="video-item" data-v-50f125ac><video controls="controls" preload="metadata" class="video-player" poster="'+F+'" data-v-50f125ac><source src="'+ha+'" type="video/mp4" data-v-50f125ac><p data-v-50f125ac>您的浏览器不支持视频播放。<a href="/images/projects/mengsheng-2024/外框架3D建模展示.mp4" target="_blank" style="color:#ff6b35;" data-v-50f125ac>点击下载视频</a></p></video><div class="video-caption" data-v-50f125ac>外框架3D建模展示 - SOLIDWORKS</div></div></div></div>',1)),t("div",de,[a[263]||(a[263]=t("h4",null,"完整系统实物",-1)),t("div",le,[t("div",{class:"gallery-item",onClick:a[71]||(a[71]=s=>d("/images/projects/mengsheng-2024/system-photo.jpg","完整系统实物图1"))},[e(i,{src:"/images/projects/mengsheng-2024/system-photo.jpg",alt:"完整系统图1",preset:"photo",class:"system-image",style:{objectFit:"contain"}}),a[261]||(a[261]=t("span",{class:"gallery-caption"},"完整系统实物图 - 正面视角",-1))]),t("div",{class:"gallery-item",onClick:a[72]||(a[72]=s=>d("/images/projects/mengsheng-2024/system-photo-2.jpg","完整系统实物图2"))},[e(i,{src:"/images/projects/mengsheng-2024/system-photo-2.jpg",alt:"完整系统图2",preset:"photo",class:"system-image",style:{objectFit:"contain"}}),a[262]||(a[262]=t("span",{class:"gallery-caption"},"完整系统实物图 - 俯视视角",-1))])]),a[264]||(a[264]=t("div",{class:"system-description"},[t("p",null," 系统集成度高，结构紧凑。核心处理板、语音识别模块、麦克风阵列等 各组件通过精心设计的PCB布局实现最优的信号传输和电磁兼容性。 整机经过严格的环境测试，确保在不同温湿度条件下的稳定运行。 ")],-1))])])]),t("div",ce,[a[271]||(a[271]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"系统测试与结果")],-1)),t("div",oe,[a[270]||(a[270]=l('<div class="testing-description" data-v-50f125ac><p data-v-50f125ac> 系统经过了严格的功能测试和性能验证，最终在盟升电子公司现场进行了正式测试并通过验收。 定位精度、响应时间、语音识别准确率等关键指标均符合竞赛标准。 由于现场规定禁止拍照摄影，因此无法提供正式演示视频，但保留了调试过程中的测试录像。 </p></div><div class="debug-videos-section" data-v-50f125ac><h4 data-v-50f125ac>系统调试演示视频</h4><div class="videos-description" data-v-50f125ac><p data-v-50f125ac> 以下是系统开发调试过程中录制的演示视频，展示了声源定位和语音识别功能的实际运行效果。 </p></div><div class="videos-gallery" data-v-50f125ac><div class="video-item" data-v-50f125ac><video controls="controls" preload="metadata" class="video-player" poster="'+F+'" data-v-50f125ac><source src="'+ya+'" type="video/mp4" data-v-50f125ac><p data-v-50f125ac>您的浏览器不支持视频播放。<a href="/images/projects/mengsheng-2024/debug-video-1.mp4" target="_blank" style="color:#ff6b35;" data-v-50f125ac>点击下载视频</a></p></video><div class="video-caption" data-v-50f125ac>调试视频1 - 数模转换器AD7606调试 (22MB)</div></div><div class="video-item" data-v-50f125ac><video controls="controls" preload="metadata" class="video-player" poster="'+F+'" data-v-50f125ac><source src="'+ba+'" type="video/mp4" data-v-50f125ac><p data-v-50f125ac>您的浏览器不支持视频播放。<a href="/images/projects/mengsheng-2024/debug-video-2.mp4" target="_blank" style="color:#ff6b35;" data-v-50f125ac>点击下载视频</a></p></video><div class="video-caption" data-v-50f125ac>调试视频2 - 语音识别功能演示 (74MB)</div></div></div></div>',2)),t("div",ne,[t("div",re,[a[268]||(a[268]=t("h4",null,"竞赛成绩",-1)),a[269]||(a[269]=t("p",null,"三等奖（奖金2,000RMB）",-1)),t("div",ve,[t("div",{class:"gallery-item",onClick:a[73]||(a[73]=s=>d("/images/projects/mengsheng-2024/盟升杯三等奖证书.png","盟升杯三等奖证书"))},[e(i,{src:"/images/projects/mengsheng-2024/盟升杯三等奖证书.png",alt:"盟升杯三等奖证书",preset:"photo",class:"award-certificate-image",style:{objectFit:"contain"}})]),L.value?(r(),v("a",pe," 下载证书 ")):y("",!0)])])])])]),t("div",fe,[a[275]||(a[275]=t("h3",{class:"section-title"},"项目总结",-1)),t("div",me,[a[274]||(a[274]=t("p",{class:"summary-description"}," 这是我们团队首次涉足具有相当工程量的嵌入式项目。从零开始，我们投入了大量时间学习和实践。 最大的挑战在于软件层面，特别是如何将 AD7606 采集到的多通道实时数据，无缝地送入 TDOA 定位算法中进行处理。 尽管我们成功驱动了所有硬件模块，并实现了稳定的语音识别功能，但由于在 ADC、DMA 的中断处理及不同代码库融合上的经验不足，最终未能完成定位功能的联调。 一个多月的全力投入，无数个深夜的调试与探索，是一段充满挑战又收获满满的旅程。 我们没有因为困难而放弃，而是将所有精力倾注于此，在有限的时间里边学边做，体验了从理论到实践的完整过程。 虽然最终系统未能实现全部功能，但我们搭建了完整的硬件系统，攻克了大部分软件难题，更重要的是，收获了宝贵的团队协作经验和解决复杂工程问题的能力。 我们为已完成的部分感到自豪，也为留下的遗憾感到激励。 ",-1)),t("div",ge,[t("div",{class:"photo-item",onClick:a[74]||(a[74]=s=>d("/images/projects/mengsheng-2024/颁奖典礼.png","颁奖典礼现场"))},[e(i,{src:"/images/projects/mengsheng-2024/颁奖典礼.png",alt:"颁奖典礼现场",preset:"photo",class:"achievement-photo",style:{objectFit:"contain"}}),a[272]||(a[272]=t("span",{class:"gallery-caption"},"颁奖典礼现场",-1))]),t("div",{class:"photo-item",onClick:a[75]||(a[75]=s=>d("/images/projects/mengsheng-2024/队友在焊接.png","队友在焊接电路板"))},[e(i,{src:"/images/projects/mengsheng-2024/队友在焊接.png",alt:"队友在焊接电路板",preset:"photo",class:"achievement-photo",style:{objectFit:"contain"}}),a[273]||(a[273]=t("span",{class:"gallery-caption"},"队友在焊接AD7606",-1))])])])]),t("div",{class:"back-to-overview-section"},[t("button",{onClick:w,class:"back-overview-button"},a[276]||(a[276]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),t("span",null,"返回项目概览",-1)]))])])):y("",!0),m.value==="led-voice-2025"?(r(),v("section",ue,[t("div",{class:"back-button-container"},[t("button",{onClick:w,class:"back-button"},a[279]||(a[279]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),f(" 返回项目概览 ",-1)]))]),D(t("aside",he,[t("div",ye,[a[280]||(a[280]=t("div",{class:"floating-nav-title"},"导航",-1)),t("nav",be,[t("a",{href:"#course-info",onClick:a[76]||(a[76]=s=>n("course-info",s)),class:o(["floating-nav-card",{active:c.value==="course-info"}])}," 课设要求 ",2),t("a",{href:"#project-intro",onClick:a[77]||(a[77]=s=>n("project-intro",s)),class:o(["floating-nav-card",{active:c.value==="project-intro"}])}," 项目介绍 ",2),t("a",{href:"#hardware-design",onClick:a[78]||(a[78]=s=>n("hardware-design",s)),class:o(["floating-nav-card",{active:c.value==="hardware-design"}])}," 硬件设计 ",2),t("a",{href:"#led-software-design",onClick:a[79]||(a[79]=s=>n("led-software-design",s)),class:o(["floating-nav-card",{active:c.value==="led-software-design"}])}," 软件设计 ",2),t("a",{href:"#led-function-demo",onClick:a[80]||(a[80]=s=>n("led-function-demo",s)),class:o(["floating-nav-card",{active:c.value==="led-function-demo"}])}," 功能演示 ",2),t("a",{href:"#led-extended-thinking",onClick:a[81]||(a[81]=s=>n("led-extended-thinking",s)),class:o(["floating-nav-card",{active:c.value==="led-extended-thinking"}])}," 拓展思考 ",2),t("a",{href:"#led-achievements",onClick:a[82]||(a[82]=s=>n("led-achievements",s)),class:o(["floating-nav-card",{active:c.value==="led-achievements"}])}," 项目总结 ",2)])])],512),[[I,m.value==="led-voice-2025"]]),t("div",ke,[t("div",we,[a[282]||(a[282]=l('<div class="hero-text" data-v-50f125ac><span class="project-date" data-v-50f125ac>2025年1月-2025年2月</span><h1 class="hero-title" data-v-50f125ac>LED语音交互灯板</h1><h2 class="hero-subtitle" data-v-50f125ac>智能照明系统设计与实现 - 课程设计</h2><div class="hero-badges" data-v-50f125ac><span class="badge badge-accent" data-v-50f125ac>硬件系统开发</span><span class="badge badge-info" data-v-50f125ac>Arduino编程</span><span class="badge badge-secondary" data-v-50f125ac>语音交互</span></div></div>',1)),t("div",{class:"hero-image",onClick:a[83]||(a[83]=s=>d("/images/projects/led-voice-2025/cover.png","LED语音交互灯板封面"))},[e(i,{src:"/images/projects/led-voice-2025/cover.png",alt:"LED语音交互灯板封面",preset:"hero",class:"cover-image clickable-image",style:{objectFit:"contain"}}),a[281]||(a[281]=t("div",{class:"image-overlay"},[t("span",{class:"overlay-text"},"点击查看大图")],-1))])])]),a[325]||(a[325]=l('<div id="course-info" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>课设要求</h3></div><div class="course-info-content" data-v-50f125ac><div class="course-intro" data-v-50f125ac><h4 data-v-50f125ac>智能LED光源照明系统设计</h4><p data-v-50f125ac> 以智能LED光源照明系统的构思、设计、实现到运行的全生命周期为载体，通过对电源系统、 人体特征点标注和跟踪、信号控制、程序编写、LED光源器件结构及照明特性、机器视觉、 人工智能等相关知识的综合运用，利用LED灯珠亮度的PWM线性调控和人体特征跟踪技术， 开发一款具有智能控制功能的照明系统。 </p></div><div class="course-objectives" data-v-50f125ac><h4 data-v-50f125ac>课设目标</h4><div class="objectives-list" data-v-50f125ac><div class="objective-item" data-v-50f125ac><div class="objective-number" data-v-50f125ac>1</div><div class="objective-content" data-v-50f125ac><h5 data-v-50f125ac>工程知识应用</h5><p data-v-50f125ac>能够将工程和专业知识用于照明系统及其特性的设计、控制和优化</p></div></div><div class="objective-item" data-v-50f125ac><div class="objective-number" data-v-50f125ac>2</div><div class="objective-content" data-v-50f125ac><h5 data-v-50f125ac>系统分析能力</h5><p data-v-50f125ac>能够运用工程科学的基本原理、专业知识分析和判断一个照明系统及其特性的关键环节和重要参数</p></div></div><div class="objective-item" data-v-50f125ac><div class="objective-number" data-v-50f125ac>3</div><div class="objective-content" data-v-50f125ac><h5 data-v-50f125ac>可行性研究</h5><p data-v-50f125ac>能够在社会、健康、安全、环境、法律、文化以及环境等现实条件的约束下，对设计方案的可行性进行研究</p></div></div><div class="objective-item" data-v-50f125ac><div class="objective-number" data-v-50f125ac>4</div><div class="objective-content" data-v-50f125ac><h5 data-v-50f125ac>数据处理分析</h5><p data-v-50f125ac>能够正确采集、整理实验数据，对实验结果进行研究、分析，得到合理有效的结论</p></div></div><div class="objective-item" data-v-50f125ac><div class="objective-number" data-v-50f125ac>5</div><div class="objective-content" data-v-50f125ac><h5 data-v-50f125ac>表达沟通能力</h5><p data-v-50f125ac>能够陈述设计思想</p></div></div></div></div><div class="course-meta" data-v-50f125ac><div class="meta-grid" data-v-50f125ac><div class="meta-item" data-v-50f125ac><span class="meta-label" data-v-50f125ac>课程性质</span><span class="meta-value" data-v-50f125ac>必修课</span></div><div class="meta-item" data-v-50f125ac><span class="meta-label" data-v-50f125ac>完成方式</span><span class="meta-value" data-v-50f125ac>个人独立完成</span></div><div class="meta-item" data-v-50f125ac><span class="meta-label" data-v-50f125ac>项目成绩</span><span class="meta-value" data-v-50f125ac>92/100分</span></div><div class="meta-item" data-v-50f125ac><span class="meta-label" data-v-50f125ac>课程成绩</span><span class="meta-value" data-v-50f125ac>93/100分</span></div></div></div></div></div><div id="project-intro" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>项目介绍</h3></div><div class="intro-content" data-v-50f125ac><p class="project-overview" data-v-50f125ac> 我根据第一性原理分析出，人类与照明的交互，本质上是信息控制，而声音是高自然性、高兼容性的输入方式， 同时照明是为了应对黑暗，而在黑暗中对于机器而言主动声音输入显然比被动视觉采集更有效，所以我选择了用语音交互来设计智能灯源。 我设计的智能语音交互LED灯板是一个集成了语音识别、LED显示控制和人机交互的智能硬件系统。 系统采用了Arduino UNO作为主控制器，结合ASR-PRO语音识别模块，能够识别用户的中文语音指令， 并控制WS2812 LED灯板显示不同的灯光效果。项目通过模块化设计，实现了语音输入、信号处理、 指令解析、LED控制等功能模块的有机集成，为智能家居和人机交互领域提供了一个不完美但较完整的解决方案。 </p><div class="tech-highlights" data-v-50f125ac><div class="highlight-grid" data-v-50f125ac><div class="highlight-item" data-v-50f125ac><h5 data-v-50f125ac>语音识别技术</h5><p data-v-50f125ac>采用ASR-PRO模块，支持自定义命令词训练和中文语音识别</p></div><div class="highlight-item" data-v-50f125ac><h5 data-v-50f125ac>LED控制技术</h5><p data-v-50f125ac>基于WS2812可编程LED，支持单独像素控制和多种灯效</p></div><div class="highlight-item" data-v-50f125ac><h5 data-v-50f125ac>系统集成</h5><p data-v-50f125ac>通过串口通信实现模块间数据传输，保证系统稳定性</p></div><div class="highlight-item" data-v-50f125ac><h5 data-v-50f125ac>用户体验</h5><p data-v-50f125ac>支持5种语音指令模式，提供直观的语音交互体验</p></div></div></div></div></div>',2)),t("div",_e,[a[293]||(a[293]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"硬件设计")],-1)),t("div",xe,[a[292]||(a[292]=t("div",{class:"hardware-description"},[t("p",null," 智能语音交互LED灯板采用模块化设计理念，整合了语音识别、微控制器、LED显示等多个核心模块。 系统通过串口通信实现模块间的数据传输，确保了良好的实时性和稳定性。 ")],-1)),t("div",je,[a[284]||(a[284]=t("h4",null,"系统架构",-1)),t("div",Ce,[t("div",{class:"gallery-item",onClick:a[84]||(a[84]=s=>d("/images/projects/led-voice-2025/hardware-connection.png","系统硬件连接图"))},[e(i,{src:"/images/projects/led-voice-2025/hardware-connection.png",alt:"系统硬件连接图",preset:"photo",class:"architecture-image-compact",style:{objectFit:"contain"}}),a[283]||(a[283]=t("span",{class:"gallery-caption"},"系统硬件连接图 - 展示各模块间的连接关系",-1))])])]),t("div",Se,[a[288]||(a[288]=t("h4",null,"核心硬件模块",-1)),t("div",Ae,[t("div",{class:"gallery-item",onClick:a[85]||(a[85]=s=>d("/images/projects/led-voice-2025/arduino-uno.png","Arduino UNO 控制板"))},[e(i,{src:"/images/projects/led-voice-2025/arduino-uno.png",alt:"Arduino UNO 控制板",preset:"photo",class:"module-image",style:{objectFit:"contain"}}),a[285]||(a[285]=t("span",{class:"gallery-caption"},"Arduino UNO - 系统主控制器",-1))]),t("div",{class:"gallery-item",onClick:a[86]||(a[86]=s=>d("/images/projects/led-voice-2025/asrpro-module.png","ASR-PRO 语音识别模块"))},[e(i,{src:"/images/projects/led-voice-2025/asrpro-module.png",alt:"ASR-PRO语音识别模块",preset:"photo",class:"module-image",style:{objectFit:"contain"}}),a[286]||(a[286]=t("span",{class:"gallery-caption"},"ASR-PRO - 语音识别核心模块",-1))]),t("div",{class:"gallery-item",onClick:a[87]||(a[87]=s=>d("/images/projects/led-voice-2025/ws2812-led.png","WS2812 LED灯条"))},[e(i,{src:"/images/projects/led-voice-2025/led-board.png",alt:"WS2812 LED灯条",preset:"photo",class:"module-image",style:{objectFit:"contain"}}),a[287]||(a[287]=t("span",{class:"gallery-caption"},"WS2812 LED - 可编程RGB显示单元",-1))])]),a[289]||(a[289]=l('<div class="hardware-specs" data-v-50f125ac><div class="spec-grid" data-v-50f125ac><div class="spec-card" data-v-50f125ac><h5 data-v-50f125ac>Arduino UNO</h5><ul data-v-50f125ac><li data-v-50f125ac>低价格的微控制器</li><li data-v-50f125ac>14个数字I/O引脚</li><li data-v-50f125ac>16MHz 时钟频率</li><li data-v-50f125ac>串口通信支持</li></ul></div><div class="spec-card" data-v-50f125ac><h5 data-v-50f125ac>ASR-PRO模块</h5><ul data-v-50f125ac><li data-v-50f125ac>支持最多50个命令词</li><li data-v-50f125ac>中文语音识别</li><li data-v-50f125ac>语音合成功能</li><li data-v-50f125ac>3-5米识别距离</li></ul></div><div class="spec-card" data-v-50f125ac><h5 data-v-50f125ac>WS2812 LED</h5><ul data-v-50f125ac><li data-v-50f125ac>64个LED像素点（8×8）</li><li data-v-50f125ac>RGB全彩显示</li><li data-v-50f125ac>单总线控制</li><li data-v-50f125ac>独立像素控制</li></ul></div></div></div>',1))]),t("div",De,[a[291]||(a[291]=t("h4",null,"系统成品展示",-1)),t("div",Ie,[t("div",{class:"gallery-item",onClick:a[88]||(a[88]=s=>d("/images/projects/led-voice-2025/system.png","LED智能语音灯板成品"))},[e(i,{src:"/images/projects/led-voice-2025/system.png",alt:"LED智能语音灯板成品",preset:"photo",class:"product-image-compact",style:{objectFit:"contain"}}),a[290]||(a[290]=t("span",{class:"gallery-caption"},"LED智能语音灯板成品 - 完整系统展示",-1))])])])])]),t("div",Me,[a[299]||(a[299]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"软件设计")],-1)),t("div",Le,[t("div",Pe,[a[294]||(a[294]=t("h4",null,"Arduino UNO 主控程序",-1)),a[295]||(a[295]=t("p",null,"负责LED灯效控制和串口通信处理：",-1)),e(h,{code:Pi,language:"cpp",filename:"Arduino_LED_Control.ino",showCopyButton:!0})]),t("div",Re,[a[296]||(a[296]=t("h4",null,"ASR-PRO 语音识别程序",-1)),a[297]||(a[297]=t("p",null,"处理语音识别和命令发送：",-1)),e(h,{code:Ri,language:"cpp",filename:"ASRPRO_Voice_Recognition.cpp",showCopyButton:!0})]),a[298]||(a[298]=l('<div class="led-algorithm-flow" data-v-50f125ac><h4 data-v-50f125ac>核心算法流程</h4><div class="led-flow-diagram" data-v-50f125ac><div class="led-flow-row" data-v-50f125ac><div class="led-step-card" data-v-50f125ac><div class="led-step-number" data-v-50f125ac>1</div><div class="led-step-content" data-v-50f125ac><h5 data-v-50f125ac>语音唤醒</h5><p data-v-50f125ac>ASR-PRO模块检测到语音指令后进行识别处理</p></div></div><div class="flow-arrow" data-v-50f125ac> ➡️ </div><div class="led-step-card" data-v-50f125ac><div class="led-step-number" data-v-50f125ac>2</div><div class="led-step-content" data-v-50f125ac><h5 data-v-50f125ac>指令解析</h5><p data-v-50f125ac>将识别结果转换为对应的控制命令字符串</p></div></div></div><div class="flow-arrow-down" data-v-50f125ac> ⬇️ </div><div class="led-flow-row" data-v-50f125ac><div class="led-step-card" data-v-50f125ac><div class="led-step-number" data-v-50f125ac>3</div><div class="led-step-content" data-v-50f125ac><h5 data-v-50f125ac>串口传输</h5><p data-v-50f125ac>通过串口通信将指令发送给Arduino控制器</p></div></div><div class="flow-arrow" data-v-50f125ac> ➡️ </div><div class="led-step-card" data-v-50f125ac><div class="led-step-number" data-v-50f125ac>4</div><div class="led-step-content" data-v-50f125ac><h5 data-v-50f125ac>LED控制</h5><p data-v-50f125ac>Arduino解析指令并调用对应的LED灯效函数</p></div></div></div><div class="flow-arrow-down" data-v-50f125ac> ⬇️ </div><div class="led-flow-final" data-v-50f125ac><div class="led-step-card final-step" data-v-50f125ac><div class="led-step-number" data-v-50f125ac>5</div><div class="led-step-content" data-v-50f125ac><h5 data-v-50f125ac>效果展示</h5><p data-v-50f125ac>WS2812 LED灯条显示相应的颜色和动态效果</p></div></div></div></div></div>',1))])]),a[326]||(a[326]=l('<div id="led-function-demo" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>功能演示</h3></div><div class="led-demo-content" data-v-50f125ac><p class="led-demo-intro" data-v-50f125ac> 智能语音交互LED灯板支持5种语音指令，每种指令对应不同的LED灯效。 系统通过ASR-PRO模块识别中文语音指令，并实时响应用户需求。 </p><div class="led-demo-video-section" data-v-50f125ac><h4 data-v-50f125ac>完整功能演示视频</h4><div class="video-item" data-v-50f125ac><video controls="controls" preload="metadata" class="video-player" poster="'+ka+'" data-v-50f125ac><source src="'+wa+'" type="video/mp4" data-v-50f125ac><p data-v-50f125ac>您的浏览器不支持视频播放。<a href="/images/projects/led-voice-2025/demo-video.mp4" target="_blank" style="color:#ff6b35;" data-v-50f125ac>点击下载视频</a></p></video><div class="video-caption" data-v-50f125ac>LED语音交互灯板完整功能演示 - 展示5种语音指令的灯光效果</div></div></div><div class="led-commands-grid" data-v-50f125ac><div class="led-command-item" data-v-50f125ac><div class="led-command-header" data-v-50f125ac><div class="led-command-icon" data-v-50f125ac>🌈</div><h4 data-v-50f125ac>彩虹模式</h4></div><div class="led-command-details" data-v-50f125ac><p data-v-50f125ac><strong data-v-50f125ac>语音指令：</strong>&quot;彩虹&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>触发条件：</strong>ASR-PRO识别ID=1</p><p data-v-50f125ac><strong data-v-50f125ac>串口命令：</strong>&quot;rainbow&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>灯效描述：</strong>LED灯条显示流动的彩虹渐变效果，颜色循环变化，营造动态视觉体验</p><p data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong>通过HSV色彩空间计算，实现360度色相渐变和移动效果</p></div></div><div class="led-command-item" data-v-50f125ac><div class="led-command-header" data-v-50f125ac><div class="led-command-icon" data-v-50f125ac>🟡</div><h4 data-v-50f125ac>暖光模式</h4></div><div class="led-command-details" data-v-50f125ac><p data-v-50f125ac><strong data-v-50f125ac>语音指令：</strong>&quot;暖光&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>触发条件：</strong>ASR-PRO识别ID=2</p><p data-v-50f125ac><strong data-v-50f125ac>串口命令：</strong>&quot;warm&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>灯效描述：</strong>LED灯条显示温暖的黄色光，亮度适中，适合阅读和休息</p><p data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong>设置RGB值为暖色调(255,150,80)，提供舒适的照明环境</p></div></div><div class="led-command-item" data-v-50f125ac><div class="led-command-header" data-v-50f125ac><div class="led-command-icon" data-v-50f125ac>🔵</div><h4 data-v-50f125ac>冷光模式</h4></div><div class="led-command-details" data-v-50f125ac><p data-v-50f125ac><strong data-v-50f125ac>语音指令：</strong>&quot;冷光&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>触发条件：</strong>ASR-PRO识别ID=3</p><p data-v-50f125ac><strong data-v-50f125ac>串口命令：</strong>&quot;cold&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>灯效描述：</strong>LED灯条显示清冷的蓝白色光，亮度较高，适合工作和学习</p><p data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong>设置RGB值为冷色调(180,200,255)，提供清晰明亮的照明</p></div></div><div class="led-command-item" data-v-50f125ac><div class="led-command-header" data-v-50f125ac><div class="led-command-icon" data-v-50f125ac>❤️</div><h4 data-v-50f125ac>心形模式</h4></div><div class="led-command-details" data-v-50f125ac><p data-v-50f125ac><strong data-v-50f125ac>语音指令：</strong>&quot;爱心&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>触发条件：</strong>ASR-PRO识别ID=4</p><p data-v-50f125ac><strong data-v-50f125ac>串口命令：</strong>&quot;heart&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>灯效描述：</strong>LED灯条按预设的心形图案点亮，显示粉红色爱心效果</p><p data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong>使用预定义的heart数组，控制特定LED像素点显示心形图案</p></div></div><div class="led-command-item" data-v-50f125ac><div class="led-command-header" data-v-50f125ac><div class="led-command-icon" data-v-50f125ac>⚫</div><h4 data-v-50f125ac>关闭模式</h4></div><div class="led-command-details" data-v-50f125ac><p data-v-50f125ac><strong data-v-50f125ac>语音指令：</strong>&quot;关闭&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>触发条件：</strong>ASR-PRO识别ID=5</p><p data-v-50f125ac><strong data-v-50f125ac>串口命令：</strong>&quot;close&quot;</p><p data-v-50f125ac><strong data-v-50f125ac>灯效描述：</strong>关闭所有LED灯，系统进入待机状态</p><p data-v-50f125ac><strong data-v-50f125ac>技术实现：</strong>将所有LED像素点RGB值设为(0,0,0)，实现完全熄灭</p></div></div></div><div class="system-performance" data-v-50f125ac><h4 data-v-50f125ac>系统性能指标</h4><div class="performance-metrics" data-v-50f125ac><div class="metric-item" data-v-50f125ac><span class="metric-label" data-v-50f125ac>语音识别精度</span><span class="metric-value" data-v-50f125ac>95%+（3-5米距离）</span></div><div class="metric-item" data-v-50f125ac><span class="metric-label" data-v-50f125ac>系统响应延迟</span><span class="metric-value" data-v-50f125ac>&lt;500ms</span></div><div class="metric-item" data-v-50f125ac><span class="metric-label" data-v-50f125ac>支持指令数量</span><span class="metric-value" data-v-50f125ac>5个语音指令</span></div><div class="metric-item" data-v-50f125ac><span class="metric-label" data-v-50f125ac>LED像素数量</span><span class="metric-value" data-v-50f125ac>64个（8×8矩阵）</span></div></div></div></div></div>',1)),t("div",Te,[a[319]||(a[319]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},'从"语音开关"到"感知伙伴"：智能灯板未来演进蓝图')],-1)),t("div",Oe,[a[318]||(a[318]=t("div",{class:"evolution-intro"},[t("p",null,' 在完成这个项目后，我一直在思考：我的原型确实实现了基本功能，但它的"智能化"程度还很有限。 我认为真正的创新应该突破传统的"命令-执行"模式。基于这个思考，我设想了这个灯板从简单"工具" 进化为有感知力、有温度的"伙伴"的三个发展阶段。 ')],-1)),t("div",Fe,[a[305]||(a[305]=t("div",{class:"part-header"},[t("div",{class:"part-number"},"01"),t("h4",null,'智能的深度：从"听懂"到"感知"'),t("p",{class:"part-subtitle"},"让灯板不只执行命令，更能理解情绪")],-1)),t("div",Ee,[a[303]||(a[303]=t("div",{class:"problem-statement"},[t("h5",null,"我观察到的局限性"),t("p",{class:"highlight-quote"},`"我的灯板能听懂'彩虹'，但听不懂我的疲惫。"`)],-1)),t("div",Be,[a[302]||(a[302]=t("h5",null,"我的研究方向：深度挖掘语谱图中的信息",-1)),t("div",Ue,[t("div",{class:"gallery-item",onClick:a[89]||(a[89]=s=>d("/images/projects/led-voice-2025/语谱图.png","语音信号语谱图分析"))},[e(i,{src:"/images/projects/led-voice-2025/语谱图.png",alt:"语音信号语谱图",preset:"photo",class:"spectrogram-image",style:{objectFit:"contain"}}),a[300]||(a[300]=t("span",{class:"gallery-caption"},"语音信号语谱图 - 我研究的语音特征提取基础",-1))]),a[301]||(a[301]=t("div",{class:"spectrogram-explanation"},[t("p",null," 我在学习过程中发现，通过傅里叶变换可以将简单的声音波形转化为信息丰富的语谱图。 这让我意识到，语音中蕴含的信息远比我之前想象的丰富。除了基本的命令词， 我还可以从中提取音高变化、能量分布、共振峰等特征，这些都可能反映说话者的情绪状态。 ")],-1))])]),a[304]||(a[304]=t("div",{class:"future-applications"},[t("h5",null,"我设想的应用场景"),t("div",{class:"application-grid"},[t("div",{class:"application-item"},[t("h6",null,"个性化交互"),t("p",null,"我希望系统能识别不同用户的声音特征，甚至包括方言口音，让每个人都能获得个性化的交互体验。")]),t("div",{class:"application-item"},[t("h6",null,"情感感知"),t("p",null,' 我最感兴趣的是让灯光能够感知情绪。比如当我疲惫时说"关灯"， 系统能从我的语调中察觉到疲惫，自动调整为柔和的暖光而不是直接关闭。 这样的交互会更有温度。 ')])])],-1))])]),t("div",Ne,[a[311]||(a[311]=t("div",{class:"part-header"},[t("div",{class:"part-number"},"02"),t("h4",null,"架构的革新：从云端到边缘"),t("p",{class:"part-subtitle"},"让AI在小小的芯片上也能思考")],-1)),t("div",$e,[a[310]||(a[310]=l('<div class="challenge-section" data-v-50f125ac><h5 data-v-50f125ac>我面临的技术选择：云端还是本地？</h5><div class="comparison-table" data-v-50f125ac><div class="comparison-item cloud" data-v-50f125ac><h6 data-v-50f125ac>云端处理</h6><div class="pros-cons" data-v-50f125ac><div class="pros" data-v-50f125ac><strong data-v-50f125ac>优势：</strong>计算能力强大、模型更新便捷 </div><div class="cons" data-v-50f125ac><strong data-v-50f125ac>劣势：</strong>网络延迟、隐私担忧、依赖网络 </div></div></div><div class="comparison-item edge" data-v-50f125ac><h6 data-v-50f125ac>本地处理</h6><div class="pros-cons" data-v-50f125ac><div class="pros" data-v-50f125ac><strong data-v-50f125ac>优势：</strong>响应迅速、隐私安全、离线工作 </div><div class="cons" data-v-50f125ac><strong data-v-50f125ac>劣势：</strong>硬件限制、模型简化 </div></div></div></div><p class="conclusion" data-v-50f125ac> 经过思考，我认为对于智能家居这种需要即时响应且涉及隐私的场景，本地处理是更合适的选择。 </p></div>',1)),t("div",qe,[a[308]||(a[308]=t("h5",null,"我找到的解决方案：TinyML技术",-1)),t("div",Ve,[t("div",{class:"gallery-item",onClick:a[90]||(a[90]=s=>d("/images/projects/led-voice-2025/现代音频分类任务的核心技术流程图.png","现代音频分类任务核心技术流程"))},[e(i,{src:"/images/projects/led-voice-2025/现代音频分类任务的核心技术流程图.png",alt:"现代音频分类任务核心技术流程",preset:"photo",class:"tinyml-image",style:{objectFit:"contain"}}),a[306]||(a[306]=t("span",{class:"gallery-caption"},"我研究的TinyML实现流程",-1))]),a[307]||(a[307]=l('<div class="tinyml-steps" data-v-50f125ac><div class="step-item" data-v-50f125ac><div class="step-number" data-v-50f125ac>1</div><div class="step-content" data-v-50f125ac><h6 data-v-50f125ac>云端训练</h6><p data-v-50f125ac>先在电脑上训练复杂的AI模型</p></div></div><div class="step-item" data-v-50f125ac><div class="step-number" data-v-50f125ac>2</div><div class="step-content" data-v-50f125ac><h6 data-v-50f125ac>模型优化</h6><p data-v-50f125ac>通过量化等技术压缩模型大小</p></div></div><div class="step-item" data-v-50f125ac><div class="step-number" data-v-50f125ac>3</div><div class="step-content" data-v-50f125ac><h6 data-v-50f125ac>嵌入式部署</h6><p data-v-50f125ac>将优化后的模型部署到Arduino等硬件</p></div></div></div>',1))]),a[309]||(a[309]=t("p",{class:"metaphor"}," 我迫不及待想要把更多的灯板接入联网的AI模型，让小小的灯板也能具备智能分析能力。 ",-1))])])]),t("div",ze,[a[317]||(a[317]=t("div",{class:"part-header"},[t("div",{class:"part-number"},"03"),t("h4",null,"体验的升华：从工具到艺术"),t("p",{class:"part-subtitle"},"让每一束光都有温度和个性")],-1)),t("div",Ge,[a[315]||(a[315]=t("div",{class:"experience-detail"},[t("h5",null,"我对用户体验的思考"),t("p",null," 我发现当前的LED控制还比较生硬。我希望未来能通过Gamma校正等技术， 让每一次光的变化都更贴近人眼的感知特性，让光的淡入淡出如呼吸般自然。 ")],-1)),t("div",We,[a[314]||(a[314]=t("h5",null,"我的终极构想：生成式灯光艺术",-1)),t("div",He,[t("div",Ke,[a[313]||(a[313]=t("div",{class:"art-description"},[t("p",null,[t("strong",null,"我设想的进化路径：")]),t("p",null," 未来的灯光模式不应該是固定的几种预设，而是能够根据我的情绪、声音的节奏， 甚至周围环境的音乐来实时生成独特的光效。我找到了叫做Mozilla Common Voice的网站可以提供大量中文方言的语音数据， 后续可以通过利用数据训练AI模型， 让灯板可以听懂全国各地的方言并实现灯光的个性化。 ")],-1)),t("div",Qe,[t("div",{class:"gallery-item",onClick:a[91]||(a[91]=s=>d("/images/projects/led-voice-2025/Mozilla Common Voice网站截图.png","Mozilla Common Voice开源语音数据集"))},[e(i,{src:"/images/projects/led-voice-2025/Mozilla Common Voice网站截图.png",alt:"Mozilla Common Voice网站",preset:"photo",class:"dataset-image-small",style:{objectFit:"contain"}}),a[312]||(a[312]=t("span",{class:"gallery-caption"},"Mozilla Common Voice - 我关注的语音数据集平台",-1))])])])])]),a[316]||(a[316]=t("div",{class:"final-vision"},[t("h5",null,"我的愿景"),t("p",{class:"vision-text"},' 我希望有一天，这块灯板不再只是一个照明工具，而是能够理解我的情绪、 与我产生共鸣的智能伙伴。从简单的"语音开关"，真正进化为有温度的"感知伙伴"。 ')],-1))])])])]),t("div",Ye,[a[323]||(a[323]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"项目总结")],-1)),t("div",Xe,[t("div",Je,[a[321]||(a[321]=l('<div class="achievement-description" data-v-50f125ac><p data-v-50f125ac> 本次课程设计完成了智能语音交互LED灯板系统的设计与实现，涵盖了硬件搭建、 软件编程、系统集成等多个环节。通过这个项目，深入学习了嵌入式开发和语音识别技术， 并获得了较好的课程成绩。 </p></div><div class="course-result" data-v-50f125ac><div class="result-item" data-v-50f125ac><span class="result-label" data-v-50f125ac>完成时间</span><span class="result-value" data-v-50f125ac>2025年1月-2025年2月</span></div><div class="result-item" data-v-50f125ac><span class="result-label" data-v-50f125ac>完成质量</span><span class="result-value" data-v-50f125ac>系统功能完整</span></div><div class="result-item" data-v-50f125ac><span class="result-label" data-v-50f125ac>技术深度</span><span class="result-value" data-v-50f125ac>涵盖多个技术领域</span></div></div>',2)),t("div",Ze,[t("div",{class:"gallery-item",onClick:a[92]||(a[92]=s=>d("/images/projects/led-voice-2025/grade-certificate.png","课程设计成绩截图"))},[e(i,{src:"/images/projects/led-voice-2025/grade-certificate.png",alt:"课程成绩截图",preset:"photo",class:"certificate-image",style:{objectFit:"contain"}}),a[320]||(a[320]=t("span",{class:"gallery-caption"},"课程成绩截图",-1))])])]),a[322]||(a[322]=l('<div class="project-insights" data-v-50f125ac><div class="insights-section" data-v-50f125ac><h4 data-v-50f125ac>我的启发：超越功能，这个项目教会我的三件事</h4><div class="insights-grid" data-v-50f125ac><div class="insight-card" data-v-50f125ac><div class="insight-number" data-v-50f125ac>1</div><div class="insight-content" data-v-50f125ac><h6 data-v-50f125ac>智能的本质是&quot;感知&quot;，而非&quot;执行&quot;</h6><p data-v-50f125ac> 真正的智能交互，在于理解声音背后的情感与个性，而不只是被动地解码命令。 它应该从一个&quot;工具&quot;进化为一个&quot;伙伴&quot;。 </p></div></div><div class="insight-card" data-v-50f125ac><div class="insight-number" data-v-50f125ac>2</div><div class="insight-content" data-v-50f125ac><h6 data-v-50f125ac>好产品的诞生需&quot;工业级&quot;的思考</h6><p data-v-50f125ac> 从一个有趣的原型到一个可靠的产品，必须跨越从&quot;作坊式&quot;开发到&quot;工业级&quot;设计的鸿沟， 系统性地思考边缘计算、模型优化等真实世界的工程挑战。 </p></div></div><div class="insight-card" data-v-50f125ac><div class="insight-number" data-v-50f125ac>3</div><div class="insight-content" data-v-50f125ac><h6 data-v-50f125ac>好体验的源头是对&quot;人&quot;的尊重</h6><p data-v-50f125ac> 技术的终点是服务于人的感受。无论是遵循人眼规律的平滑光效，还是创造惊喜的生成式艺术， 最动人的设计，永远根植于对物理和生理规律的深刻理解与尊重。 </p></div></div></div></div><div class="gratitude" data-v-50f125ac><p data-v-50f125ac>感谢晓海波教授的悉心指导，这次课程设计让我受益匪浅。</p></div></div>',1))])]),t("div",{class:"back-to-overview-section"},[t("button",{onClick:w,class:"back-overview-button"},a[324]||(a[324]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),t("span",null,"返回项目概览",-1)]))])])):y("",!0),m.value==="restaurant-system-2025"?(r(),v("section",ai,[t("div",{class:"back-button-container"},[t("button",{onClick:w,class:"back-button"},a[327]||(a[327]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),f(" 返回项目概览 ",-1)]))]),D(t("aside",ti,[t("div",si,[a[328]||(a[328]=t("div",{class:"floating-nav-title"},"导航",-1)),t("nav",ei,[t("a",{href:"#restaurant-info",onClick:a[93]||(a[93]=s=>n("restaurant-info",s)),class:o(["floating-nav-card",{active:c.value==="restaurant-info"}])}," 项目概述 ",2),t("a",{href:"#restaurant-architecture",onClick:a[94]||(a[94]=s=>n("restaurant-architecture",s)),class:o(["floating-nav-card",{active:c.value==="restaurant-architecture"}])}," 技术架构 ",2),t("a",{href:"#restaurant-features",onClick:a[95]||(a[95]=s=>n("restaurant-features",s)),class:o(["floating-nav-card",{active:c.value==="restaurant-features"}])}," 功能展示 ",2),t("a",{href:"#restaurant-demo",onClick:a[96]||(a[96]=s=>n("restaurant-demo",s)),class:o(["floating-nav-card",{active:c.value==="restaurant-demo"}])}," 系统演示 ",2),t("a",{href:"#restaurant-achievements",onClick:a[97]||(a[97]=s=>n("restaurant-achievements",s)),class:o(["floating-nav-card",{active:c.value==="restaurant-achievements"}])}," 项目总结 ",2)])])],512),[[I,m.value==="restaurant-system-2025"]]),t("div",ii,[t("div",di,[a[330]||(a[330]=l('<div class="hero-text" data-v-50f125ac><span class="project-date" data-v-50f125ac>2025年6月</span><h1 class="hero-title" data-v-50f125ac>美莲花餐厅支出管理系统</h1><h2 class="hero-subtitle" data-v-50f125ac>نىلۇپار ئاشخانا چىقىم خاتىرىسى سىستېمىسى</h2><div class="hero-badges" data-v-50f125ac><span class="badge badge-primary" data-v-50f125ac>PyQt6</span><span class="badge badge-info" data-v-50f125ac>SQLite数据库</span><span class="badge badge-success" data-v-50f125ac>Deepseek API</span></div></div>',1)),t("div",{class:"hero-image",onClick:a[98]||(a[98]=s=>d("/images/projects/restaurant-system-2025/登录窗口.png","美莲花餐厅系统首页界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/登录窗口.png",alt:"美莲花餐厅系统首页",preset:"hero",class:"cover-image clickable-image",style:{objectFit:"contain"}}),a[329]||(a[329]=t("div",{class:"image-overlay"},[t("span",{class:"overlay-text"},"点击查看大图")],-1))])])]),a[350]||(a[350]=l('<div id="restaurant-info" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>项目概述</h3></div><div class="restaurant-info-content" data-v-50f125ac><div class="project-intro" data-v-50f125ac><p data-v-50f125ac> 这是我为父亲的餐厅开发的支出管理系统。以前收银员需要手写账本来记录支出，即使后来改用Excel一个一个输入， 但仍然费时又容易出错。为了让收银员能够快速录入支出数据，大大减轻其工作负担，我用Python和PyQt6开发了这套系统， 界面同时展示中文和维语，该系统从2025年7月开始正式在我父亲的餐厅投入使用， 不仅让收银员日常的支出录入变得非常便捷，也让我爸每个月的核对、结账、分析工作轻松了很多。 最重要的是，我还集成了DeepSeek AI来提供智能财务分析，帮助我们更好地了解餐厅的经营状况。 </p></div><div class="key-features-grid" data-v-50f125ac><div class="feature-highlight" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>🏪</div><h4 data-v-50f125ac>专业餐厅管理</h4><p data-v-50f125ac>针对餐厅业务特点设计的完整财务管理解决方案</p></div><div class="feature-highlight" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>🤖</div><h4 data-v-50f125ac>AI智能分析</h4><p data-v-50f125ac>集成DeepSeek AI，提供专业的财务分析和经营建议</p></div><div class="feature-highlight" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>🌐</div><h4 data-v-50f125ac>双语界面</h4><p data-v-50f125ac>支持中文和维吾尔语双语显示，满足多元化需求</p></div><div class="feature-highlight" data-v-50f125ac><div class="feature-icon" data-v-50f125ac>📊</div><h4 data-v-50f125ac>数据可视化</h4><p data-v-50f125ac>丰富的图表展示和数据导出功能</p></div></div></div></div><div id="restaurant-architecture" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>技术架构</h3></div><div class="restaurant-architecture-content" data-v-50f125ac><div class="tech-stack-overview" data-v-50f125ac><div class="tech-category" data-v-50f125ac><h4 data-v-50f125ac>开发框架</h4><div class="tech-items" data-v-50f125ac><span class="tech-item" data-v-50f125ac>Python 3.7+</span><span class="tech-item" data-v-50f125ac>PyQt6</span><span class="tech-item" data-v-50f125ac>PyQt-Fluent-Widgets</span></div></div><div class="tech-category" data-v-50f125ac><h4 data-v-50f125ac>数据处理</h4><div class="tech-items" data-v-50f125ac><span class="tech-item" data-v-50f125ac>SQLite 3</span><span class="tech-item" data-v-50f125ac>pandas</span><span class="tech-item" data-v-50f125ac>matplotlib</span></div></div><div class="tech-category" data-v-50f125ac><h4 data-v-50f125ac>AI集成</h4><div class="tech-items" data-v-50f125ac><span class="tech-item" data-v-50f125ac>DeepSeek API</span><span class="tech-item" data-v-50f125ac>多线程处理</span><span class="tech-item" data-v-50f125ac>智能分析</span></div></div><div class="tech-category" data-v-50f125ac><h4 data-v-50f125ac>文档处理</h4><div class="tech-items" data-v-50f125ac><span class="tech-item" data-v-50f125ac>openpyxl</span><span class="tech-item" data-v-50f125ac>Excel导出</span><span class="tech-item" data-v-50f125ac>数据报表</span></div></div></div><div class="architecture-highlights" data-v-50f125ac><div class="architecture-item" data-v-50f125ac><h5 data-v-50f125ac>MVC架构模式</h5><p data-v-50f125ac>采用模型-视图-控制器架构，界面与业务逻辑分离，代码结构清晰，易于维护和扩展。</p></div><div class="architecture-item" data-v-50f125ac><h5 data-v-50f125ac>数据库设计</h5><p data-v-50f125ac>SQLite数据库包含用户表、分类表、支出记录表，支持外键关联和数据完整性约束。</p></div><div class="architecture-item" data-v-50f125ac><h5 data-v-50f125ac>多线程设计</h5><p data-v-50f125ac>AI分析功能采用多线程处理，避免UI阻塞，保持界面响应性和用户体验。</p></div></div></div></div>',2)),t("div",li,[a[348]||(a[348]=t("div",{class:"section-header"},[t("h3",{class:"section-title"},"核心功能展示")],-1)),t("div",ci,[t("div",oi,[a[332]||(a[332]=l('<div class="feature-description" data-v-50f125ac><h4 data-v-50f125ac>用户身份验证</h4><p data-v-50f125ac> 系统采用安全的登录验证机制，支持用户名密码登录，密码采用SHA256加密存储。 登录界面采用Fluent Design风格，支持双语显示，具有良好的用户体验。 系统设置了两种用户角色：管理员拥有所有权限，而收银员作为普通用户只能进行支出录入和查询，无法修改数据或使用AI分析功能，确保了系统安全性。 </p><div class="feature-specs" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>安全性</span><span class="spec-value" data-v-50f125ac>SHA256密码加密</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>界面风格</span><span class="spec-value" data-v-50f125ac>Fluent Design</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>语言支持</span><span class="spec-value" data-v-50f125ac>中文/维语双语</span></div></div></div>',1)),t("div",ni,[t("div",{class:"gallery-item",onClick:a[99]||(a[99]=s=>d("/images/projects/restaurant-system-2025/登录窗口.png","用户登录界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/登录窗口.png",alt:"登录界面",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[331]||(a[331]=t("span",{class:"gallery-caption"},"用户登录界面",-1))])])]),t("div",ri,[t("div",vi,[t("div",{class:"gallery-item",onClick:a[100]||(a[100]=s=>d("/images/projects/restaurant-system-2025/支出录入页.png","支出录入界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/支出录入页.png",alt:"支出录入界面",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[333]||(a[333]=t("span",{class:"gallery-caption"},"支出录入界面",-1))])]),a[334]||(a[334]=l('<div class="feature-description" data-v-50f125ac><h4 data-v-50f125ac>支出录入管理</h4><p data-v-50f125ac> 主界面提供直观的支出录入功能，支持按分类快速录入支出数据。 界面采用卡片式布局，分类按钮网格化显示，支持自定义分类管理。 每次录入都有二次确认对话框，确保数据准确性。 </p><div class="feature-specs" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>录入方式</span><span class="spec-value" data-v-50f125ac>分类按钮快速录入</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>数据验证</span><span class="spec-value" data-v-50f125ac>金额格式验证</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>用户体验</span><span class="spec-value" data-v-50f125ac>二次确认机制</span></div></div></div>',1))]),t("div",pi,[a[336]||(a[336]=l('<div class="feature-description" data-v-50f125ac><h4 data-v-50f125ac>每日记录管理</h4><p data-v-50f125ac> 系统提供当日支出记录的查看和管理功能，支持记录的编辑和删除操作。 界面以表格形式展示当日所有支出记录，包含时间、分类、金额、备注等详细信息。 </p><div class="feature-specs" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>显示方式</span><span class="spec-value" data-v-50f125ac>表格化展示</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>操作功能</span><span class="spec-value" data-v-50f125ac>编辑/删除记录</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>数据完整性</span><span class="spec-value" data-v-50f125ac>详细信息展示</span></div></div></div>',1)),t("div",fi,[t("div",{class:"gallery-item",onClick:a[101]||(a[101]=s=>d("/images/projects/restaurant-system-2025/每日管理页.png","每日记录管理界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/每日管理页.png",alt:"每日管理界面",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[335]||(a[335]=t("span",{class:"gallery-caption"},"每日记录管理界面",-1))])])]),t("div",mi,[t("div",gi,[t("div",{class:"gallery-item",onClick:a[102]||(a[102]=s=>d("/images/projects/restaurant-system-2025/查询记录页.png","数据查询界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/查询记录页.png",alt:"查询界面",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[337]||(a[337]=t("span",{class:"gallery-caption"},"数据查询界面",-1))])]),a[338]||(a[338]=l('<div class="feature-description" data-v-50f125ac><h4 data-v-50f125ac>数据查询分析</h4><p data-v-50f125ac> 提供强大的数据查询功能，支持按日期范围和分类筛选支出记录。 实时统计总记录数、总金额、平均金额等关键指标，支持数据排序和Excel导出。 需要注意的是，只有管理员才能修改支出记录的金额和备注信息，普通用户只能查询和导出数据。 </p><div class="feature-specs" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>筛选条件</span><span class="spec-value" data-v-50f125ac>日期范围+分类</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>统计功能</span><span class="spec-value" data-v-50f125ac>实时数据统计</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>导出功能</span><span class="spec-value" data-v-50f125ac>Excel格式导出</span></div></div></div>',1))]),t("div",ui,[a[341]||(a[341]=l('<div class="feature-description-center" data-v-50f125ac><h4 data-v-50f125ac>智能报表分析</h4><p data-v-50f125ac> 报表中心是系统的核心功能，支持单时段分析和双时段对比分析。 单时段分析可生成饼图等数据可视化图表，双时段对比分析集成AI智能分析功能。 </p><div class="feature-specs-horizontal" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>分析模式</span><span class="spec-value" data-v-50f125ac>单时段/双时段对比</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>可视化</span><span class="spec-value" data-v-50f125ac>饼图/柱状图展示</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>AI功能</span><span class="spec-value" data-v-50f125ac>深度分析报告</span></div></div></div>',1)),t("div",hi,[t("div",{class:"gallery-item",onClick:a[103]||(a[103]=s=>d("/images/projects/restaurant-system-2025/报表中心_单时段分析.png","单时段分析界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/报表中心_单时段分析.png",alt:"单时段分析",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[339]||(a[339]=t("span",{class:"gallery-caption"},"单时段分析界面",-1))]),t("div",{class:"gallery-item",onClick:a[104]||(a[104]=s=>d("/images/projects/restaurant-system-2025/单时段分析_生成饼图.png","数据可视化饼图"))},[e(i,{src:"/images/projects/restaurant-system-2025/单时段分析_生成饼图.png",alt:"饼图展示",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[340]||(a[340]=t("span",{class:"gallery-caption"},"数据可视化饼图",-1))])])]),t("div",yi,[a[344]||(a[344]=l('<div class="feature-description-center" data-v-50f125ac><h4 data-v-50f125ac>AI智能分析</h4><p data-v-50f125ac> 系统集成DeepSeek AI，提供专业的餐厅财务分析服务。 双时段对比分析时，AI会自动生成深度分析报告，包含支出趋势分析、异常识别和经营建议。 分析结果以Markdown格式美观展示，支持导出保存。 出于安全考虑，AI分析功能仅限管理员使用，普通用户无法访问此功能。 </p><div class="feature-specs-horizontal" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>AI引擎</span><span class="spec-value" data-v-50f125ac>DeepSeek API</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>分析深度</span><span class="spec-value" data-v-50f125ac>趋势+异常+建议</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>展示格式</span><span class="spec-value" data-v-50f125ac>Markdown富文本</span></div></div></div>',1)),t("div",bi,[t("div",{class:"gallery-item",onClick:a[105]||(a[105]=s=>d("/images/projects/restaurant-system-2025/报表中心_双时段Deepseek分析.png","AI分析界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/报表中心_双时段Deepseek分析.png",alt:"AI分析界面",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[342]||(a[342]=t("span",{class:"gallery-caption"},"AI分析界面",-1))]),t("div",{class:"gallery-item",onClick:a[106]||(a[106]=s=>d("/images/projects/restaurant-system-2025/Deepseek分析结果.png","AI分析结果展示"))},[e(i,{src:"/images/projects/restaurant-system-2025/Deepseek分析结果.png",alt:"AI分析结果",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[343]||(a[343]=t("span",{class:"gallery-caption"},"AI分析结果展示",-1))])])]),t("div",ki,[a[347]||(a[347]=l('<div class="feature-description-center" data-v-50f125ac><h4 data-v-50f125ac>系统设置管理</h4><p data-v-50f125ac> 系统提供完善的设置管理功能，包括用户管理和分类管理。 支持用户密码修改、角色管理，以及支出分类的增删改操作，满足个性化需求。 </p><div class="feature-specs-horizontal" data-v-50f125ac><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>用户管理</span><span class="spec-value" data-v-50f125ac>密码修改/角色管理</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>分类管理</span><span class="spec-value" data-v-50f125ac>增删改分类</span></div><div class="spec-item" data-v-50f125ac><span class="spec-label" data-v-50f125ac>双语支持</span><span class="spec-value" data-v-50f125ac>中文/维语分类名</span></div></div></div>',1)),t("div",wi,[t("div",{class:"gallery-item",onClick:a[107]||(a[107]=s=>d("/images/projects/restaurant-system-2025/系统设置_用户管理.png","用户管理界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/系统设置_用户管理.png",alt:"用户管理",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[345]||(a[345]=t("span",{class:"gallery-caption"},"用户管理界面",-1))]),t("div",{class:"gallery-item",onClick:a[108]||(a[108]=s=>d("/images/projects/restaurant-system-2025/系统设置_分类管理.png","分类管理界面"))},[e(i,{src:"/images/projects/restaurant-system-2025/系统设置_分类管理.png",alt:"分类管理",preset:"photo",class:"feature-image",style:{objectFit:"contain"}}),a[346]||(a[346]=t("span",{class:"gallery-caption"},"分类管理界面",-1))])])])])]),a[351]||(a[351]=l('<div id="restaurant-demo" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>系统完整演示</h3></div><div class="restaurant-demo-content" data-v-50f125ac><div class="demo-intro" data-v-50f125ac><p data-v-50f125ac></p></div><div class="led-demo-video-section" data-v-50f125ac><h4 data-v-50f125ac>系统完整流程演示</h4><div class="video-item" data-v-50f125ac><video controls="controls" preload="metadata" class="video-player" poster="'+_a+'" data-v-50f125ac><source src="'+xa+'" type="video/mp4" data-v-50f125ac><p data-v-50f125ac>您的浏览器不支持视频播放。<a href="/images/projects/restaurant-system-2025/restaurant-system-demo.mp4" target="_blank" style="color:#ff6b35;" data-v-50f125ac>点击下载视频</a></p></video><div class="video-caption" data-v-50f125ac>展示了登录、支出录入、数据查询、报表分析、AI智能分析等核心功能的完整操作流程 (15MB)</div></div></div></div></div><div id="restaurant-achievements" class="section" data-v-50f125ac><div class="section-header" data-v-50f125ac><h3 class="section-title" data-v-50f125ac>项目总结与收获</h3></div><div class="restaurant-achievements-content" data-v-50f125ac><div class="project-stats" data-v-50f125ac><div class="stats-grid" data-v-50f125ac><div class="stat-item" data-v-50f125ac><div class="stat-number" data-v-50f125ac>100%</div><div class="stat-label" data-v-50f125ac>功能完成度</div></div><div class="stat-item" data-v-50f125ac><div class="stat-number" data-v-50f125ac>2</div><div class="stat-label" data-v-50f125ac>双语言支持</div></div><div class="stat-item" data-v-50f125ac><div class="stat-number" data-v-50f125ac>12+</div><div class="stat-label" data-v-50f125ac>核心模块</div></div><div class="stat-item" data-v-50f125ac><div class="stat-number" data-v-50f125ac>AI</div><div class="stat-label" data-v-50f125ac>智能分析</div></div></div></div><div class="achievements-overview" data-v-50f125ac><div class="achievement-section" data-v-50f125ac><h4 data-v-50f125ac>核心成果</h4><p class="achievement-summary" data-v-50f125ac> 经过一个多月的实际使用，这套系统真正解决了我们餐厅的实际问题。收银员从以前的手写记录到现在的一键录入，工作效率大幅提升。 我爸也不用再花大量时间去整理Excel表格，系统自动生成的报表和AI分析让他能够更直观地了解餐厅的经营状况，做出更好的经营决策。 </p></div><div class="learning-insights" data-v-50f125ac><h4 data-v-50f125ac>项目启发</h4><div class="insights-content" data-v-50f125ac><p data-v-50f125ac> 看到收银员从一开始不会用电脑，到现在熟练使用我的系统，看到我爸不用再熬夜整理账目， 这种成就感是任何课堂项目都给不了的。技术的价值在于解决真实世界的问题。 </p><p data-v-50f125ac> 双语界面不是为了炫技，而是因为我们这里有维族员工。大按钮不是为了美观，而是因为收银员经常戴手套操作。 真正的用户体验设计要从用户的实际需求出发。 </p><p data-v-50f125ac> AI分析不是为了显摆技术，而是真正帮助我爸分析经营数据，发现哪些支出异常，哪个月份需要注意成本控制。 技术要服务于实际业务需求，而不是为了技术而技术。 </p></div></div><div class="future-plans" data-v-50f125ac><h4 data-v-50f125ac>未来规划</h4><p data-v-50f125ac> 这个系统还有很多可以改进的地方。我计划增加库存管理功能， 帮助餐厅更好地控制食材成本；还想加入销售数据分析， 让支出和收入数据结合起来，给我爸提供更全面的经营建议。 最重要的是，我希望能把这套经验推广到其他小餐厅， 用技术真正帮助到更多像我爸一样的个体经营者。 </p></div></div></div></div><div class="github-section" data-v-50f125ac><div class="github-content" data-v-50f125ac><div class="github-info" data-v-50f125ac><h4 data-v-50f125ac>项目资源</h4><p data-v-50f125ac> 完整的Python源代码、数据库文件、配置文件等已上传至GitHub仓库。 同时提供exe安装包，包含完整的运行环境，无需额外配置即可使用。 </p></div><div class="project-buttons" data-v-50f125ac><a href="https://github.com/yourusername/restaurant-expense-system" target="_blank" class="github-repo-btn" data-v-50f125ac><svg class="github-icon" fill="currentColor" viewBox="0 0 24 24" data-v-50f125ac><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-50f125ac></path></svg> 查看完整源码 </a><a href="/downloads/restaurant-system-2025/restaurant-expense-system-installer.zip" download="美莲花餐厅支出管理系统_安装包.zip" class="download-button" data-v-50f125ac><svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-50f125ac><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-50f125ac></path></svg> 下载安装包 </a></div></div></div>',3)),t("div",{class:"back-to-overview-section"},[t("button",{onClick:w,class:"back-overview-button"},a[349]||(a[349]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),t("span",null,"返回项目概览",-1)]))])])):y("",!0),m.value&&m.value!=="nus-sws-2024"&&m.value!=="mengsheng-2024"&&m.value!=="led-voice-2025"&&m.value!=="restaurant-system-2025"&&m.value!=="mobile-app-2025"?(r(),v("section",_i,[t("div",{class:"back-button-container"},[t("button",{onClick:w,class:"back-button"},a[352]||(a[352]=[t("svg",{class:"back-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),f(" 返回项目概览 ",-1)]))]),t("div",{class:"coming-soon"},[t("div",{class:"coming-soon-content"},[a[353]||(a[353]=t("div",{class:"coming-soon-icon"},"🚀",-1)),a[354]||(a[354]=t("h2",{class:"coming-soon-title"},"项目详情即将更新",-1)),a[355]||(a[355]=t("p",{class:"coming-soon-text"}," 该项目的详细信息正在整理中，敬请期待更新。 ",-1)),t("button",{onClick:w,class:"back-overview-btn"}," 返回项目概览 ")])])])):y("",!0)]),j.value.isOpen?(r(),v("div",{key:0,class:"image-modal-overlay",onClick:P},[t("div",{class:"image-modal-content",onClick:a[109]||(a[109]=Y(()=>{},["stop"]))},[t("button",{onClick:P,class:"modal-close-btn"},a[356]||(a[356]=[t("svg",{class:"close-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])),e(i,{src:j.value.src,alt:j.value.title,class:"modal-image",style:{objectFit:"contain"}},null,8,["src","alt"]),t("div",xi,g(j.value.title),1)])])):y("",!0)])}}},Ui=U(Ti,[["__scopeId","data-v-50f125ac"]]);export{Ui as default};
