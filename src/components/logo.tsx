import React from "react";
interface LogoProps {
  darkMode?: boolean;
}
const Logo: React.FC<LogoProps> = (props) => {
  const { darkMode } = props;
  if (darkMode) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="160"
        viewBox="0 0 452 160"
        fill="none"
      >
        <path
          d="M173.7 89.3L186.8 94.4H230.8V97.3H186.1V128C186.1 129.1 180.6 131.9 175.5 131.9H173.7V89.3ZM222.5 94.4H221.4L227.2 88.1L239.2 97.2C238.5 98 237.1 98.9 234.9 99.4V128C234.8 128.7 228.6 130.9 224.5 130.9H222.5V94.4ZM178.1 120.7H231V123.5H178.1V120.7ZM180.7 76.8H209.3L216 68.2C216 68.2 223.4 74 227.9 78C227.6 79.1 226.6 79.6 225.1 79.6H181.5L180.7 76.8ZM207.5 45.5C198.1 60.8 177.6 76.5 157.4 84.2L156.8 82.9C174 72.5 192.3 52.1 196.5 37.8L214 42.1C213.6 43.4 212.3 44 209.2 44.3C218.1 56.5 236 63.7 251.4 67.9L251.3 69.5C246.3 70.9 243 75.9 242.2 80.3C226.9 72.8 213.6 61.3 207.5 45.5Z"
          fill="black"
        />
        <path
          d="M320.7 77H319.6L325.5 70.5L337.2 79.4C336.6 80.1 335.1 80.8 333.2 81.1C333 94.2 335.4 111.6 343.4 116.5C344.5 117.1 345.1 117 345.6 115.9C346.8 113.5 348 110.1 349 106.7L350 106.8L349.2 120C351.9 124.4 352.6 127.6 350.9 129.7C347.6 133.9 341.3 131.8 337.2 128.5C324 119.5 321.1 98.6 320.7 77ZM268.5 77H326.7V79.8H269.4L268.5 77ZM281.4 37.8L297.6 44.1C297.1 45.4 295.7 46.1 293.5 45.9C284.2 62.5 271.7 73.4 257.7 80.2L256.7 79.3C266.1 70 276.1 54.5 281.4 37.8ZM281.8 64.1H323.1L329.3 56.4C329.3 56.4 336.4 61.6 340.7 65.4C340.4 66.5 339.3 67 337.9 67H282.6L281.8 64.1ZM281.5 51.9H329.4L336 43.7C336 43.7 343.3 49 348 53.1C347.7 54.2 346.7 54.7 345.2 54.7H280.1L281.5 51.9ZM302.1 81.6L316.9 88.5C316.3 89.6 315.3 90.2 312.9 89.8C303 106.8 284.8 124 257.4 131.9L256.8 130.7C279.3 119.3 295.1 99.5 302.1 81.6ZM268.9 88.2C331.2 106.8 317.7 136.8 305 127.4C300.7 117.6 288 101.8 268.3 89.4L268.9 88.2Z"
          fill="black"
        />
        <path
          d="M384 55.3H434L440.1 47.2C440.1 47.2 447 52.7 451.2 56.6C450.9 57.7 449.8 58.2 448.4 58.2H384.8L384 55.3ZM396.1 38.1C420.9 42.4 410 60.7 400.5 52.8C400.3 47.8 397.7 42.3 395.2 38.7L396.1 38.1ZM428.5 67.4H427.5L432.9 61.6L443.8 69.9C443.3 70.7 442 71.5 440.1 71.9V111.8C440 112.5 434.3 114.8 430.4 114.8H428.5V67.4ZM398.7 79.8H433.8V82.7H398.7V79.8ZM398.7 92.4H433.8V95.2H398.7V92.4ZM398.7 105.3H433.8V108.2H398.7V105.3ZM423.3 37.9L439.6 41.2C439.3 42.4 438.1 43.3 435.9 43.4C432.2 47.3 426 53 420.7 56.9H419.5C420.9 51.6 422.5 43.5 423.3 37.9ZM392.3 62.5L404.3 67.4H433.1V70.2H403.7V111.7C403.7 112.9 398.9 115.5 394.1 115.5H392.3V62.5ZM381 111C387.9 118 394.6 118.9 412.7 118.9C423.8 118.9 438.9 118.9 451.1 118.5V119.7C446.6 120.8 444 124.3 443.5 129.6C435 129.6 422.6 129.6 412.8 129.6C394 129.6 386.5 126.7 379.8 112.6C375.5 118.2 369 125.5 364.8 129.5C364.9 130.8 364.2 131.5 363.2 132L356.9 118.9C362.9 116.9 373.4 112.7 381 109.3V111ZM381 86.2V110.8L370 116.8V84.7H357.6L357 81.7H368.5L374.1 74.3L386.2 84C385.4 84.9 383.9 85.7 381 86.2ZM361.3 41.3C391.1 46.5 381.4 68.6 370.2 60.6C369.2 54 364.7 46.6 360.5 41.9L361.3 41.3ZM408.9 55.3H423.3C420.5 59.4 415.9 65.7 412.2 69.4H408.2C408.6 65.2 408.9 58.8 408.9 55.3Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.9665 65.2367L60.9648 65.2308L60.9665 65.2665C60.3596 64.4906 57.2508 59.0802 57.0291 56.7461C56.6973 53.2555 56.2897 51.3251 55.2858 48.4878C54.8792 47.339 54.2601 44.984 53.9099 43.2548C53.2061 39.7783 52.5315 38.169 50.7401 35.6913C50.0795 34.778 49.1571 33.4697 48.6896 32.7843C47.5352 31.0904 46.025 29.9968 43.0604 28.7075C41.6858 28.1098 40.5205 27.4301 40.4708 27.1974C40.4157 26.9387 40.9162 26.6305 41.7576 26.4049C43.7446 25.8725 44.4834 24.9167 44.9922 22.2196C45.2305 20.9566 45.3594 19.471 45.2782 18.9186C45.1679 18.1646 45.2936 17.8002 45.7829 17.4567C46.548 16.9197 46.4746 16.4348 45.1917 13.5563C44.4378 11.865 44.3721 11.5074 44.7572 11.1873C45.5431 10.5333 45.2564 9.30475 43.786 7.02663C42.0289 4.30439 38.8849 1.1059 37.3231 0.451932C36.0412 -0.0847389 32.3701 -0.158652 30.3757 0.312141C27.2899 1.04098 24.7286 3.16871 23.2126 6.26308C22.3594 8.00453 22.2847 8.44222 22.2863 11.6921C22.2875 15.059 22.3449 15.3608 23.4887 18.0428C24.8408 21.2131 24.8928 21.5852 24.1739 22.9397C23.8927 23.47 23.4633 24.5629 23.22 25.3689C22.7073 27.0653 22.4613 27.3076 17.9377 30.5711C16.0761 31.9143 13.575 34.0006 12.38 35.207C8.30047 39.3259 4.98275 43.5696 2.57088 48.901L0 59.7354V72.1036L0.937238 83.6079L1.84369 90.0689C2.85757 89.958 5.14791 89.698 6.93293 89.4911L10.1785 89.1148L11.8054 90.9308C12.9761 92.2374 13.9399 92.9531 15.2414 93.4827C16.9052 94.1595 17.0351 94.2855 16.8597 95.0535C16.5913 96.2297 15.404 105.057 15.3969 105.931C15.3918 106.547 15.5605 106.654 16.5362 106.654H17.6815L17.4875 108.341C17.2365 110.523 16.1107 129.811 15.8696 136.058C15.6175 142.596 14.7819 154.581 14.4135 156.947C14.2484 158.007 14.1121 159.128 14.1108 159.437C14.1086 159.962 14.838 160 24.9665 160H35.8247L36.0287 158.509C36.1409 157.689 36.247 155.845 36.2643 154.411C36.2926 152.081 36.7113 147.777 36.8306 148.591C37.5626 153.592 37.889 155.629 38.1706 156.947C38.3594 157.831 38.5803 158.879 38.6618 159.277L38.8099 160L59.4792 160L59.4791 159.992H60.9665L59.8647 105.269C60.9344 105.159 63.0086 104.364 63.1557 104.211C63.3112 104.048 62.9565 102.412 62.3419 100.456C61.4402 97.5858 61.3197 96.8811 61.641 96.365C61.9497 95.8698 61.9231 95.1143 61.512 92.6934C60.9621 89.4519 59.3516 85.4654 57.5691 82.9328C55.7119 80.2934 54.2277 77.8906 54.2081 77.4905C54.1822 76.9584 56.2477 76.96 56.6886 77.4925C56.8724 77.7142 57.1221 78.2927 57.2437 78.7779C57.5101 79.8419 57.8009 79.8715 59.0739 78.963C60.0214 78.2869 60.0634 78.284 60.4882 78.8666C60.8098 79.3072 60.8785 80.1132 60.746 81.8932C60.5171 84.9747 60.79 85.4561 62.2521 84.5489C62.8434 84.1825 63.7049 83.4746 64.1673 82.9762C65.8574 81.1531 66.196 80.3008 66.3682 77.434L66.5333 74.6825L67.4914 74.5173C68.5748 74.3306 68.9747 73.3768 68.0746 73.1262C67.7559 73.0378 66.8132 72.8723 65.9796 72.7588C65.1462 72.6454 64.3802 72.4163 64.2773 72.2498C64.1747 72.0833 63.6664 71.9471 63.1476 71.9471C62.07 71.9471 61.9616 71.7141 62.7658 71.1247C63.2916 70.7394 63.2788 70.662 62.5609 69.8962C61.8308 69.1175 61.8195 69.0407 62.3204 68.2746C62.6093 67.8324 62.8459 67.3819 62.8459 67.2732C62.8459 67.1661 62.0043 66.2681 60.9665 65.2665V65.2367ZM13.6411 63.0599C12.2861 64.0529 12.3954 67.6952 13.9948 74.8393C14.814 78.4977 16.6481 83.883 17.4487 84.9802C18.1801 85.9828 18.8092 85.2867 19.4027 82.8187C19.7141 81.5233 20.1844 80.0357 20.4477 79.5132C20.7113 78.9907 20.7991 78.5173 20.6436 78.4607C20.4881 78.4045 19.6394 77.9623 18.7576 77.4783L17.1544 76.5981L17.1457 73.2284C17.139 70.6437 17.0062 69.6147 16.5759 68.8129C16.2672 68.238 15.9103 66.7359 15.783 65.4746C15.5868 63.5345 15.445 63.1425 14.8611 62.9265C14.4369 62.77 13.9665 62.8214 13.6411 63.0599Z"
          fill="black"
        />
        <path
          d="M82.7318 64.5137C82.876 64.847 83.049 65.8034 83.264 66.992C83.7907 69.9033 84.5694 74.2083 85.7957 74.1667C88.5632 74.0726 90.7 73.4581 91.6815 72.4741C92.1913 71.9635 92.6905 71.5454 92.7905 71.5454C92.8909 71.5454 92.8713 73.507 92.7473 75.9046L92.5219 80.2639L93.503 80.6351C94.6788 81.0798 94.995 81.8755 94.4851 83.1089C94.211 83.7722 94.203 84.1973 94.456 84.671C95.0508 85.7849 94.8327 87.3531 93.6996 90.1104C93.0987 91.5722 92.5161 93.1838 92.4048 93.6919C92.2932 94.2 91.0347 96.4746 89.6075 98.7469C85.7297 104.921 85.5697 105.238 86.1462 105.607C86.4107 105.776 87.3717 106.083 88.2814 106.289L89.9355 106.663L89.7993 114.251C89.7242 118.424 89.5078 125.182 89.3183 129.268C88.8383 139.63 89.3911 146.047 91.2813 152.046C91.7825 153.637 92.2919 155.915 92.4131 157.107L92.6338 159.277H108.18L108.353 155.822C108.484 153.191 108.733 151.792 109.394 149.957C109.871 148.632 110.37 147.431 110.502 147.289C110.634 147.147 110.825 148.159 110.927 149.538C111.117 152.111 112.004 156.004 112.877 158.097L113.368 159.277H122.052C130.021 159.277 130.755 159.23 130.966 158.714C131.518 157.367 131.137 146.196 130.289 138.821C129.736 134.014 129.432 129.691 129.43 126.609C129.428 122.455 128.755 114.686 128.339 114.011C128.26 113.884 127.968 111.592 127.69 108.919C126.794 100.322 125.429 94.29 123.27 89.3966C122.72 88.1507 122.095 86.3871 121.88 85.4773C121.541 84.0399 121.564 83.6587 122.051 82.5664C122.591 81.3594 122.589 81.2807 122.016 80.5718C121.348 79.7446 121.48 79.258 122.373 79.258C122.702 79.258 123.419 78.8798 123.967 78.4177C126.953 75.8998 128.742 70.9416 131.201 58.3696C132.794 50.228 132.896 48.5601 132 45.3546C130.434 39.7536 128.539 37.4549 123.566 35.126C120.408 33.6471 119.74 33.1137 120.619 32.7756C121.048 32.6104 120.899 32.3234 119.802 31.2029C118.728 30.1057 118.427 29.5385 118.294 28.364C118.07 26.3702 118.656 24.2531 119.959 22.3561C121.407 20.2451 121.647 19.0767 120.843 18.0515C120.317 17.3825 120.244 16.9033 120.377 15.032C120.537 12.7889 120.095 10.0914 119.313 8.53928C118.181 6.29297 114.868 4.25105 111.766 3.88727C109.553 3.62761 106.532 4.34007 104.446 5.61297C101.557 7.37595 99.9082 11.186 100.501 14.7283C100.658 15.6654 100.729 17.2276 100.658 18.1997C100.502 20.3534 101.802 26.1527 102.948 28.4196C103.436 29.3849 104.233 30.3037 105.055 30.849L106.376 31.7257L106.186 35.6537L103.962 36.5554C101.095 37.7175 98.6712 39.3779 96.1592 41.899C94.3784 43.687 91.9178 47.0173 91.9178 47.6404C91.9178 47.7654 91.3044 48.7787 90.555 49.8918C89.4286 51.5648 88.8556 52.0787 87.2498 52.8567C85.5677 53.6717 85.2577 53.9641 84.9342 55.0394C84.9196 55.088 84.9025 55.1454 84.8832 55.2102C84.632 56.0553 84.0032 58.1701 83.4663 58.821L82.7318 64.5137Z"
          fill="black"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="160"
      viewBox="0 0 452 160"
      fill="none"
    >
      <path
        d="M173.7 89.3L186.8 94.4H230.8V97.3H186.1V128C186.1 129.1 180.6 131.9 175.5 131.9H173.7V89.3ZM222.5 94.4H221.4L227.2 88.1L239.2 97.2C238.5 98 237.1 98.9 234.9 99.4V128C234.8 128.7 228.6 130.9 224.5 130.9H222.5V94.4ZM178.1 120.7H231V123.5H178.1V120.7ZM180.7 76.8H209.3L216 68.2C216 68.2 223.4 74 227.9 78C227.6 79.1 226.6 79.6 225.1 79.6H181.5L180.7 76.8ZM207.5 45.5C198.1 60.8 177.6 76.5 157.4 84.2L156.8 82.9C174 72.5 192.3 52.1 196.5 37.8L214 42.1C213.6 43.4 212.3 44 209.2 44.3C218.1 56.5 236 63.7 251.4 67.9L251.3 69.5C246.3 70.9 243 75.9 242.2 80.3C226.9 72.8 213.6 61.3 207.5 45.5Z"
        fill="white"
      />
      <path
        d="M320.7 77H319.6L325.5 70.5L337.2 79.4C336.6 80.1 335.1 80.8 333.2 81.1C333 94.2 335.4 111.6 343.4 116.5C344.5 117.1 345.1 117 345.6 115.9C346.8 113.5 348 110.1 349 106.7L350 106.8L349.2 120C351.9 124.4 352.6 127.6 350.9 129.7C347.6 133.9 341.3 131.8 337.2 128.5C324 119.5 321.1 98.6 320.7 77ZM268.5 77H326.7V79.8H269.4L268.5 77ZM281.4 37.8L297.6 44.1C297.1 45.4 295.7 46.1 293.5 45.9C284.2 62.5 271.7 73.4 257.7 80.2L256.7 79.3C266.1 70 276.1 54.5 281.4 37.8ZM281.8 64.1H323.1L329.3 56.4C329.3 56.4 336.4 61.6 340.7 65.4C340.4 66.5 339.3 67 337.9 67H282.6L281.8 64.1ZM281.5 51.9H329.4L336 43.7C336 43.7 343.3 49 348 53.1C347.7 54.2 346.7 54.7 345.2 54.7H280.1L281.5 51.9ZM302.1 81.6L316.9 88.5C316.3 89.6 315.3 90.2 312.9 89.8C303 106.8 284.8 124 257.4 131.9L256.8 130.7C279.3 119.3 295.1 99.5 302.1 81.6ZM268.9 88.2C331.2 106.8 317.7 136.8 305 127.4C300.7 117.6 288 101.8 268.3 89.4L268.9 88.2Z"
        fill="white"
      />
      <path
        d="M384 55.3H434L440.1 47.2C440.1 47.2 447 52.7 451.2 56.6C450.9 57.7 449.8 58.2 448.4 58.2H384.8L384 55.3ZM396.1 38.1C420.9 42.4 410 60.7 400.5 52.8C400.3 47.8 397.7 42.3 395.2 38.7L396.1 38.1ZM428.5 67.4H427.5L432.9 61.6L443.8 69.9C443.3 70.7 442 71.5 440.1 71.9V111.8C440 112.5 434.3 114.8 430.4 114.8H428.5V67.4ZM398.7 79.8H433.8V82.7H398.7V79.8ZM398.7 92.4H433.8V95.2H398.7V92.4ZM398.7 105.3H433.8V108.2H398.7V105.3ZM423.3 37.9L439.6 41.2C439.3 42.4 438.1 43.3 435.9 43.4C432.2 47.3 426 53 420.7 56.9H419.5C420.9 51.6 422.5 43.5 423.3 37.9ZM392.3 62.5L404.3 67.4H433.1V70.2H403.7V111.7C403.7 112.9 398.9 115.5 394.1 115.5H392.3V62.5ZM381 111C387.9 118 394.6 118.9 412.7 118.9C423.8 118.9 438.9 118.9 451.1 118.5V119.7C446.6 120.8 444 124.3 443.5 129.6C435 129.6 422.6 129.6 412.8 129.6C394 129.6 386.5 126.7 379.8 112.6C375.5 118.2 369 125.5 364.8 129.5C364.9 130.8 364.2 131.5 363.2 132L356.9 118.9C362.9 116.9 373.4 112.7 381 109.3V111ZM381 86.2V110.8L370 116.8V84.7H357.6L357 81.7H368.5L374.1 74.3L386.2 84C385.4 84.9 383.9 85.7 381 86.2ZM361.3 41.3C391.1 46.5 381.4 68.6 370.2 60.6C369.2 54 364.7 46.6 360.5 41.9L361.3 41.3ZM408.9 55.3H423.3C420.5 59.4 415.9 65.7 412.2 69.4H408.2C408.6 65.2 408.9 58.8 408.9 55.3Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.9665 65.2367L60.9648 65.2308L60.9665 65.2665C60.3596 64.4906 57.2508 59.0802 57.0291 56.7461C56.6973 53.2555 56.2897 51.3251 55.2858 48.4878C54.8792 47.339 54.2601 44.984 53.9099 43.2548C53.2061 39.7783 52.5315 38.169 50.7401 35.6913C50.0795 34.778 49.1571 33.4697 48.6896 32.7843C47.5352 31.0904 46.025 29.9968 43.0604 28.7075C41.6858 28.1098 40.5205 27.4301 40.4708 27.1974C40.4157 26.9387 40.9162 26.6305 41.7576 26.4049C43.7446 25.8725 44.4834 24.9167 44.9922 22.2196C45.2305 20.9566 45.3594 19.471 45.2782 18.9186C45.1679 18.1646 45.2936 17.8002 45.7829 17.4567C46.548 16.9197 46.4746 16.4348 45.1917 13.5563C44.4378 11.865 44.3721 11.5074 44.7572 11.1873C45.5431 10.5333 45.2564 9.30475 43.786 7.02663C42.0289 4.30439 38.8849 1.1059 37.3231 0.451932C36.0412 -0.0847389 32.3701 -0.158652 30.3757 0.312141C27.2899 1.04098 24.7286 3.16871 23.2126 6.26308C22.3594 8.00453 22.2847 8.44222 22.2863 11.6921C22.2875 15.059 22.3449 15.3608 23.4887 18.0428C24.8408 21.2131 24.8928 21.5852 24.1739 22.9397C23.8927 23.47 23.4633 24.5629 23.22 25.3689C22.7073 27.0653 22.4613 27.3076 17.9377 30.5711C16.0761 31.9143 13.575 34.0006 12.38 35.207C8.30047 39.3259 4.98275 43.5696 2.57088 48.901L0 59.7354V72.1036L0.937238 83.6079L1.84369 90.0689C2.85757 89.958 5.14791 89.698 6.93293 89.4911L10.1785 89.1148L11.8054 90.9308C12.9761 92.2374 13.9399 92.9531 15.2414 93.4827C16.9052 94.1595 17.0351 94.2855 16.8597 95.0535C16.5913 96.2297 15.404 105.057 15.3969 105.931C15.3918 106.547 15.5605 106.654 16.5362 106.654H17.6815L17.4875 108.341C17.2365 110.523 16.1107 129.811 15.8696 136.058C15.6175 142.596 14.7819 154.581 14.4135 156.947C14.2484 158.007 14.1121 159.128 14.1108 159.437C14.1086 159.962 14.838 160 24.9665 160H35.8247L36.0287 158.509C36.1409 157.689 36.247 155.845 36.2643 154.411C36.2926 152.081 36.7113 147.777 36.8306 148.591C37.5626 153.592 37.889 155.629 38.1706 156.947C38.3594 157.831 38.5803 158.879 38.6618 159.277L38.8099 160L59.4792 160L59.4791 159.992H60.9665L59.8647 105.269C60.9344 105.159 63.0086 104.364 63.1557 104.211C63.3112 104.048 62.9565 102.412 62.3419 100.456C61.4402 97.5858 61.3197 96.8811 61.641 96.365C61.9497 95.8698 61.9231 95.1143 61.512 92.6934C60.9621 89.4519 59.3516 85.4654 57.5691 82.9328C55.7119 80.2934 54.2277 77.8906 54.2081 77.4905C54.1822 76.9584 56.2477 76.96 56.6886 77.4925C56.8724 77.7142 57.1221 78.2927 57.2437 78.7779C57.5101 79.8419 57.8009 79.8715 59.0739 78.963C60.0214 78.2869 60.0634 78.284 60.4882 78.8666C60.8098 79.3072 60.8785 80.1132 60.746 81.8932C60.5171 84.9747 60.79 85.4561 62.2521 84.5489C62.8434 84.1825 63.7049 83.4746 64.1673 82.9762C65.8574 81.1531 66.196 80.3008 66.3682 77.434L66.5333 74.6825L67.4914 74.5173C68.5748 74.3306 68.9747 73.3768 68.0746 73.1262C67.7559 73.0378 66.8132 72.8723 65.9796 72.7588C65.1462 72.6454 64.3802 72.4163 64.2773 72.2498C64.1747 72.0833 63.6664 71.9471 63.1476 71.9471C62.07 71.9471 61.9616 71.7141 62.7658 71.1247C63.2916 70.7394 63.2788 70.662 62.5609 69.8962C61.8308 69.1175 61.8195 69.0407 62.3204 68.2746C62.6093 67.8324 62.8459 67.3819 62.8459 67.2732C62.8459 67.1661 62.0043 66.2681 60.9665 65.2665V65.2367ZM13.6411 63.0599C12.2861 64.0529 12.3954 67.6952 13.9948 74.8393C14.814 78.4977 16.6481 83.883 17.4487 84.9802C18.1801 85.9828 18.8092 85.2867 19.4027 82.8187C19.7141 81.5233 20.1844 80.0357 20.4477 79.5132C20.7113 78.9907 20.7991 78.5173 20.6436 78.4607C20.4881 78.4045 19.6394 77.9623 18.7576 77.4783L17.1544 76.5981L17.1457 73.2284C17.139 70.6437 17.0062 69.6147 16.5759 68.8129C16.2672 68.238 15.9103 66.7359 15.783 65.4746C15.5868 63.5345 15.445 63.1425 14.8611 62.9265C14.4369 62.77 13.9665 62.8214 13.6411 63.0599Z"
        fill="white"
      />
      <path
        d="M82.7318 64.5137C82.876 64.847 83.049 65.8034 83.264 66.992C83.7907 69.9033 84.5694 74.2083 85.7957 74.1667C88.5632 74.0726 90.7 73.4581 91.6815 72.4741C92.1913 71.9635 92.6905 71.5454 92.7905 71.5454C92.8909 71.5454 92.8713 73.507 92.7473 75.9046L92.5219 80.2639L93.503 80.6351C94.6788 81.0798 94.995 81.8755 94.4851 83.1089C94.211 83.7722 94.203 84.1973 94.456 84.671C95.0508 85.7849 94.8327 87.3531 93.6996 90.1104C93.0987 91.5722 92.5161 93.1838 92.4048 93.6919C92.2932 94.2 91.0347 96.4746 89.6075 98.7469C85.7297 104.921 85.5697 105.238 86.1462 105.607C86.4107 105.776 87.3717 106.083 88.2814 106.289L89.9355 106.663L89.7993 114.251C89.7242 118.424 89.5078 125.182 89.3183 129.268C88.8383 139.63 89.3911 146.047 91.2813 152.046C91.7825 153.637 92.2919 155.915 92.4131 157.107L92.6338 159.277H108.18L108.353 155.822C108.484 153.191 108.733 151.792 109.394 149.957C109.871 148.632 110.37 147.431 110.502 147.289C110.634 147.147 110.825 148.159 110.927 149.538C111.117 152.111 112.004 156.004 112.877 158.097L113.368 159.277H122.052C130.021 159.277 130.755 159.23 130.966 158.714C131.518 157.367 131.137 146.196 130.289 138.821C129.736 134.014 129.432 129.691 129.43 126.609C129.428 122.455 128.755 114.686 128.339 114.011C128.26 113.884 127.968 111.592 127.69 108.919C126.794 100.322 125.429 94.29 123.27 89.3966C122.72 88.1507 122.095 86.3871 121.88 85.4773C121.541 84.0399 121.564 83.6587 122.051 82.5664C122.591 81.3594 122.589 81.2807 122.016 80.5718C121.348 79.7446 121.48 79.258 122.373 79.258C122.702 79.258 123.419 78.8798 123.967 78.4177C126.953 75.8998 128.742 70.9416 131.201 58.3696C132.794 50.228 132.896 48.5601 132 45.3546C130.434 39.7536 128.539 37.4549 123.566 35.126C120.408 33.6471 119.74 33.1137 120.619 32.7756C121.048 32.6104 120.899 32.3234 119.802 31.2029C118.728 30.1057 118.427 29.5385 118.294 28.364C118.07 26.3702 118.656 24.2531 119.959 22.3561C121.407 20.2451 121.647 19.0767 120.843 18.0515C120.317 17.3825 120.244 16.9033 120.377 15.032C120.537 12.7889 120.095 10.0914 119.313 8.53928C118.181 6.29297 114.868 4.25105 111.766 3.88727C109.553 3.62761 106.532 4.34007 104.446 5.61297C101.557 7.37595 99.9082 11.186 100.501 14.7283C100.658 15.6654 100.729 17.2276 100.658 18.1997C100.502 20.3534 101.802 26.1527 102.948 28.4196C103.436 29.3849 104.233 30.3037 105.055 30.849L106.376 31.7257L106.186 35.6537L103.962 36.5554C101.095 37.7175 98.6712 39.3779 96.1592 41.899C94.3784 43.687 91.9178 47.0173 91.9178 47.6404C91.9178 47.7654 91.3044 48.7787 90.555 49.8918C89.4286 51.5648 88.8556 52.0787 87.2498 52.8567C85.5677 53.6717 85.2577 53.9641 84.9342 55.0394C84.9196 55.088 84.9025 55.1454 84.8832 55.2102C84.632 56.0553 84.0032 58.1701 83.4663 58.821L82.7318 64.5137Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
