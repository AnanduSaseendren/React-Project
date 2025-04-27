import React from 'react';
import FeatureCard from '../components/FeatureCard';

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-eye-icon-png-image_4277644.jpg"
          title="COME SEE US"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        />
        <FeatureCard
          icon="https://static.vecteezy.com/system/resources/previews/023/233/339/non_2x/settings-icon-customize-illustration-sign-mechanical-symbol-vector.jpg"
          title="MAKE IT YOUR OWN"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        />
        <FeatureCard
          icon="https://i.pinimg.com/564x/53/c1/3b/53c13b19ab536f60e040a97f91ca5c6b.jpg"
          title="PERFECT THE FIT"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
